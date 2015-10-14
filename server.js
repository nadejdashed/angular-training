var expressIO = require('express.io'),
    serveStatic = require('serve-static'),
    fs = require('fs'),
    extend = require('util')._extend;

var app = expressIO(),
  folder = process.argv[2] !== 'debug' ? 'build' : 'app',
  eventFile = './json/events.json';

app.use(expressIO.cookieParser());
app.use(expressIO.session({secret: 'monkey'}));
app.use(expressIO.bodyParser());

app.http().io();
app.listen(8000);

// Session is automatically setup on initial request.
app.get('/', function(req, res) {
    req.session.loginDate = new Date().toString();
    res.sendfile(__dirname + '/' + folder + '/index.html');
});
app.get('/templates/{name}', function(req, res) {
    res.sendfile(__dirname + '/' + folder + '/templates/' + req.name);
});
app.use(expressIO.static(__dirname + '/'));
app.use(expressIO.static(__dirname + '/' + folder));

app.get('/events', function(req, res) {
    var result = require(eventFile);
    res.json(result);
});
app.get('/events/:id', function(req, res) {
    var result = require(eventFile),
      id = req.params.id,
      event = result.responses.filter(function(el){return el.id == id})[0];
    res.json(event);
});
app.post('/events', function(req, res){
    var result = require(eventFile),
      events = result.responses,
      lastId = events[events.length - 1].id,
      data = req.body;

    data.id = lastId + 1;
    data.vote = 0;
    data.src = data.src || "";
    data.date = new Date();

    result.responses.push(data);
    fs.writeFile(eventFile, JSON.stringify(result), function(err) {
        console.log(err ? err : "JSON saved to " + eventFile);
        if (err){
            res.error(err);
        } else {
            res.send(result);
        }
    });
});
app.put('/events/:id', function(req, res){
    var id = req.params.id,
      result = require(eventFile),
      event = result.responses.filter(function(el){return el.id == id})[0],
      data = req.body;

    extend(event, data);
    fs.writeFile(eventFile, JSON.stringify(result), function(err) {
        console.log(err ? err : "JSON saved to " + eventFile);
        if (err){
            res.error(err);
        } else {
            res.send(result);
        }
    });
});
app.delete('/events/:id', function(req, res){
    var id = req.params.id,
      result = require(eventFile),
      event = result.responses.filter(function(el){return el.id == id})[0],
      events = result.responses,
      ind = events.indexOf(event);

    if (ind >= 0) {events.splice(ind, 1);}
    fs.writeFile(eventFile, JSON.stringify(result), function(err) {
        console.log(err ? err : "JSON saved to " + eventFile);
        if (err){
            res.error(err);
        } else {
            res.send(result);
        }
    });
});

exports = module.exports = app;



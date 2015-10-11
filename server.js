var expressIO = require('express.io'),
    serveStatic = require('serve-static');

var app = expressIO(),
  folder = process.argv[2] !== 'debug' ? 'build' : 'app';

app.use(expressIO.cookieParser());
app.use(expressIO.session({secret: 'monkey'}));

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

app.get('/cats', function(req, res) {
    var result = require('./json/cats.json');
    res.json(result);
});

exports = module.exports = app;



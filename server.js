var expressIO = require('express.io'),
    serveStatic = require('serve-static');

var app = expressIO();

app.use(expressIO.cookieParser());
app.use(expressIO.session({secret: 'monkey'}));

app.http().io();
app.listen(8000);

// Session is automatically setup on initial request.
app.get('/', function(req, res) {
    req.session.loginDate = new Date().toString();
    res.sendfile(__dirname + '/app/index.html');
});
app.use(expressIO.static(__dirname + '/'));
app.use(expressIO.static(__dirname + '/app'));

app.io.route('ready', function(req) {
    console.log('ready');
});
//var server = http.createServer(app);
//server.listen(8000);

/*var connect = require('connect'),
    serveStatic = require('serve-static'),
    http = require('http'),
    io = require("socket.io");

var app = connect();


var server = http.createServer(app);
var socket = io.listen(server);
server.listen(8000);
socket.set('log level', 3);
socket.set('resource', '/api');

socket.on('connection', function(client) {
    client.on('disconnect', function(){
    });

    client.on('hello', function(){
        console.log('test');
    });
});
*/
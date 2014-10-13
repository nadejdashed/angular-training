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
    res.sendfile(__dirname + '/build/index.html');
});
app.use(expressIO.static(__dirname + '/'));
app.use(expressIO.static(__dirname + '/build'));


var users = {};
var messages = [];
var personalChats = {};

app.io.route('user', {
    create: function(req) {
        users[req.socket.id] = req.data.username;
        req.io.broadcast('user:created', {id: req.socket.id, username: req.data.username});
        req.io.emit('user:registered', req.socket.id);
    },
    list: socketUsersList,
    remove: function(req) {
        if (users[req.data.id]) {
            delete users[req.data.id];
        }
        socketUsersList(req);
    }
});

app.io.route('chatmessage', {
    create: function (req) {
        var time = (+new Date());
        var message = {
            message: req.data.message,
            time: time,
            userId: req.data.userId
        };
        messages.push(message);
        message.username = users[req.data.userId];
        req.io.broadcast('chatmessage:created', message);
    }
});

app.io.route('chat', {
    create: function (req) {
        var personalChat = getPersonalChat(req.data.leftUserId, req.data.rightUserId);
        req.io.emit('chat:messages:' + req.data.rightUserId, {
            colleague: users[req.data.rightUserId],
            messages: personalChat
        });
    },
    message: function (req) {
        var time = (+new Date());
        var personalChat = getPersonalChat(req.data.leftUserId, req.data.rightUserId);
        var message = {
            message: req.data.message,
            time: time,
            userId: req.data.leftUserId
        };
        personalChat.push(message);
        message.username = users[req.data.leftUserId];
        req.io.broadcast('chat:message:' + req.data.rightUserId, message);
    }
});

function getPersonalChat(leftUserId, rightUserId) {
    var chat = personalChats[leftUserId + rightUserId] || personalChats[rightUserId + leftUserId];
    if (!chat) {
        personalChats[leftUserId + rightUserId] = [];
        chat = [];
    }
    return chat;
}

function socketUsersList(req) {
    var usersArr = [];
    for (var userId in users) {
        if (users.hasOwnProperty(userId)) {
            usersArr.push({id: userId, username: users[userId]});
        }
    }
    req.io.emit('users:listed', {responses: usersArr});
}

exports = module.exports = app;

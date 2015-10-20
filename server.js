var expressIO = require('express.io'),
    serveStatic = require('serve-static'),
    fs = require('fs'),
    jwt = require("jsonwebtoken");
extend = require('util')._extend,
    app = expressIO();

var savedUser = {}, currentUser = {},
    securityCode = 'monkey',
    folder = process.argv[2] !== 'debug' ? 'build' : 'app',
    fileName = './json/cats.json',
    instanceName = '/cats',
    fields = {
        id: 'id',
        name: 'name',
        src: 'link',
        vote: 'clickCount',
        owner: 'creator'
    };

// Default configuration
app.use(expressIO.cookieParser());
app.use(expressIO.bodyParser());

app.http().io();
app.listen(8000);

// Static request
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/' + folder + '/index.html');
});
app.get('/templates/{name}', function(req, res) {
    res.sendfile(__dirname + '/' + folder + '/templates/' + req.name);
});
app.use(expressIO.static(__dirname + '/'));
app.use(expressIO.static(__dirname + '/' + folder));

// Authorization
function checkAuth(req, res, next) {
    var strToken = req.headers["authorization"],
     token;
     currentUser = {};
     token = strToken ? req.headers["authorization"].replace('Bearer ', '') : '';
     jwt.verify(token, securityCode, function(err, decoded) {
     if (err) {
     res
     .status(403)
     .send({status: 'error', code: "NOPERMISSION", error: "Session expired"});
     } else {
     if (decoded.login === savedUser.login && decoded.password === savedUser.password) {
     currentUser = decoded;
     next();
     } else {
     res
     .status(401)
     .send({status: 'error', code: "NOPERMISSION", error: "No authorized"});
     }
     }
     });
}
app.post('/register', function(req, res){
    var login = req.body.login,
        password = req.body.password,
        password2 = req.body.password2;

    if (login && password && password === password2){
        savedUser.login = login;
        savedUser.password = password;
        res.send({status: 'success'});
    } else {
        res.error({status: 'error'});
    }
});
app.get('/auth', checkAuth, function(req, res){
    res.send({status: 'success'});
});
app.post('/auth', function(req, res) {
    var user = {
            login: req.body.login,
            password: req.body.password
        },
        token;

    if (user.login && user.password && user.login === savedUser.login && user.password === savedUser.password) {
        token = jwt.sign(user, securityCode);
        res.send({
            status: 'success',
            user: user,
            token: token
        });
    } else {
        res.send({status: 'error'});
    }
});

// REST
app.get(instanceName, function(req, res) {
    var result = require(fileName);
    res.json(result);
});
app.get(instanceName + '/:id', function(req, res) {
    var result = require(fileName),
        id = req.params.id,
        instance = result.filter(function(el){return el[fields.id] == id})[0];
    res.json(instance);
});
app.post(instanceName, checkAuth, function(req, res){
    var result = require(fileName),
        instances = result,
        lastId = instances[instances.length - 1][fields.id],
        data = req.body;

    data[fields.id] = lastId + 1;
    data[fields.vote] = 0;
    data[fields.src] = data[fields.src] || "";
    data[fields.owner] = savedUser.login;
    //data.date = new Date();

    result.push(data);
    fs.writeFile(fileName, JSON.stringify(result), function(err) {
        console.log(err ? err : "JSON saved to " + fileName);
        if (err){
            res.error(err);
        } else {
            res.send(result);
        }
    });
});
app.put(instanceName + '/:id', checkAuth, function(req, res, user){
    var id = req.params.id,
        result = require(fileName),
        instance = result.filter(function(el){return el[fields.id] == id})[0],
        data = req.body;

    if (currentUser.login === instance[fields.owner]){
        extend(instance, data);
        fs.writeFile(fileName, JSON.stringify(result), function(err) {
            console.log(err ? err : "JSON saved to " + fileName);
            if (err){
                res.error(err);
            } else {
                res.send(result);
            }
        });
    } else {
        res.status(405).send({status: 'error', code: "NOPERMISSION", error: "No permissions"});
    }

});
app.delete(instanceName + '/:id', checkAuth, function(req, res, user){
    var id = req.params.id,
        result = require(fileName),
        instance = result.filter(function(el){return el[fields.id] == id})[0],
        instances = result,
        ind = instances.indexOf(instance);

    if (currentUser.login === instance[fields.owner]){
        if (ind >= 0) {instances.splice(ind, 1);}
        fs.writeFile(fileName, JSON.stringify(result), function(err) {
            console.log(err ? err : "JSON saved to " + fileName);
            if (err){
                res.error(err);
            } else {
                res.send(result);
            }
        });
    } else {
        res.status(405).send({status: 'error', code: "NOPERMISSION", error: "No permissions"});
    }
});

exports = module.exports = app;





//var expressIO = require('express.io'),
//    serveStatic = require('serve-static'),
//    fs = require('fs'),
//    extend = require('util')._extend;
//
//var app = expressIO(),
//  folder = process.argv[2] !== 'debug' ? 'build' : 'app',
//  fileName = './json/cats.json',
//  instanceName = '/cats';
//
//app.use(expressIO.cookieParser());
//app.use(expressIO.session({secret: 'cat'}));
//app.use(expressIO.bodyParser());
//
//app.http().io();
//app.listen(8000);
//
//// Session is automatically setup on initial request.
//app.get('/', function(req, res) {
//    req.session.loginDate = new Date().toString();
//    res.sendfile(__dirname + '/' + folder + '/index.html');
//});
//app.get('/templates/{name}', function(req, res) {
//    res.sendfile(__dirname + '/' + folder + '/templates/' + req.name);
//});
//app.use(expressIO.static(__dirname + '/'));
//app.use(expressIO.static(__dirname + '/' + folder));
//
//app.get(instanceName, function(req, res) {
//    var result = require(fileName);
//    res.json(result);
//});
//app.get(instanceName + '/:id', function(req, res) {
//    var result = require(fileName),
//      id = req.params.id,
//      instance = result.filter(function(el){return el.id == id})[0];
//    res.json(instance);
//});
//app.post(instanceName, function(req, res){
//    var result = require(fileName),
//      instances = result,
//      lastId = instances[instances.length - 1].id,
//      data = req.body;
//
//    data.id = lastId + 1;
//    data.clickCount = 0;
//    data.link = data.link || "";
//    //data.date = new Date();
//
//    result.push(data);
//    fs.writeFile(fileName, JSON.stringify(result), function(err) {
//        console.log(err ? err : "JSON saved to " + fileName);
//        if (err){
//            res.error(err);
//        } else {
//            res.send(result);
//        }
//    });
//});
//app.put(instanceName + '/:id', function(req, res){
//    var id = req.params.id,
//      result = require(fileName),
//      instance = result.filter(function(el){return el.id == id})[0],
//      data = req.body;
//
//    extend(instance, data);
//    fs.writeFile(fileName, JSON.stringify(result), function(err) {
//        console.log(err ? err : "JSON saved to " + fileName);
//        if (err){
//            res.error(err);
//        } else {
//            res.send(result);
//        }
//    });
//});
//app.delete(instanceName + '/:id', function(req, res){
//    var id = req.params.id,
//      result = require(fileName),
//      instance = result.filter(function(el){return el.id == id})[0],
//      instances = result,
//      ind = instances.indexOf(instance);
//
//    if (ind >= 0) {instances.splice(ind, 1);}
//    fs.writeFile(fileName, JSON.stringify(result), function(err) {
//        console.log(err ? err : "JSON saved to " + fileName);
//        if (err){
//            res.error(err);
//        } else {
//            res.send(result);
//        }
//    });
//});
//
//exports = module.exports = app;
//
//

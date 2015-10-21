var expressIO = require('express.io'),
    serveStatic = require('serve-static'),
    fs = require('fs'),
    jwt = require('jsonwebtoken'),
    extend = require('util')._extend;

var app = expressIO(),
  folder = process.argv[2] !== 'debug' ? 'build' : 'app',
  fileName = './json/languages.json',
  fileUsersName = './json/users.json',
  instanceName = '/languages';
  savedUser = {},
  securityCode = 'monkey';

var fields = {
    id: 'id',
    name: 'name',
    catImg: 'catImg',
    likes: 'likes',
    clicks: 'clicks',
    owner: 'owner',
    dataAdd: 'dataAdd'
};

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

// Authorization
function checkAuth(req, res, next) {
  var strToken = req.headers["authorization"],
    token;

  token = strToken ? req.headers["authorization"].replace('Bearer ', '') : '';
  jwt.verify(token, securityCode, function(err, decoded) {
    if (err) {
      res
        .status(403)
        .send({status: 'error', code: "NOPERMISSION", error: "Session expired"});
    } else {
      if (decoded.login === savedUser.login && decoded.password === savedUser.password) {
        req.user = decoded;
        next();
      } else {
        res
          .status(401)
          .send({status: 'error', code: "NOPERMISSION", error: "No authorized"});
      }
    }
  });
  //next();
}

function addUserJson(res, user) {
  var result = require(fileUsersName),
    instances = result,
    lastId = instances[instances.length - 1].id,
    //data = req.body;
    data = user;
  data[fields.id] = lastId + 1;

  result.push(data);
  fs.writeFile(fileUsersName, JSON.stringify(result), function(err) {
      console.log(err ? err : "JSON saved to " + fileUsersName);
      if (err){
          res.error(err);
      } else {
          res.send(result);
      }
  });
}

app.post('/register', function(req, res){

  var user = {
    login: req.body.login,
    password: req.body.password,
    password2: req.body.password2,
    email: req.body.email
  };

  if (user.login && user.password && user.password === user.password2) {
    addUserJson(res, user);
    res.send({status: 'success'});
  } else {
    res.error({status: 'error'});
  }
});

app.get('/auth', checkAuth, function(req, res){
  res.send({status: 'success', user: req.user});
});

app.post('/auth', function(req, res) {
  var user = {
      login: req.body.login,
      password: req.body.password
  };
  savedUser.login = user.login;
  savedUser.password = user.password;

  var token;
  var check = false;
  var savedUsers = require(fileUsersName);

  for (var i = 0; i < savedUsers.length; i++) {
    if (user.login && user.password && user.login === savedUsers[i].login && user.password === savedUsers[i].password) {
      user.id = savedUsers[i].id;
      user.email = savedUsers[i].email;
      token = jwt.sign(user, securityCode);
      check = true;
      break;
    }
  }

  if (check) {
    res.send({
      status: 'success',
      user: user,
      token: token
    });
  } else {
    res.send({status: 'error'});
  }

});

//REST
app.get(instanceName, function(req, res) {
    var result = require(fileName);
    res.json(result);
});

app.get(instanceName + '/:id', function(req, res) {
    var result = require(fileName),
      id = req.params.id,
      instance = result.filter(function(el){return el.id == id})[0];
    res.json(instance);
});

app.post(instanceName, checkAuth, function(req, res) {
    var result = require(fileName),
      instances = result,
      lastId = instances[instances.length - 1].id,
      data = req.body;

    data[fields.id] = lastId + 1;
    data[fields.likes] = 0;
    data[fields.clicks] = 0;
    data[fields.catImg] = data[fields.catImg] || "";
    data[fields.owner] = savedUser.login;
    data[fields.dataAdd] = new Date();

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

app.put(instanceName + '/:id', checkAuth, function(req, res) {
    var id = req.params.id,
      result = require(fileName),
      instance = result.filter(function(el){return el[fields.id]  == id})[0],
      data = req.body;

    if (req.user.login === instance[fields.owner]) {
      extend(instance, data);
      fs.writeFile(fileName, JSON.stringify(result), function(err) {
        console.log(err ? err : "JSON saved to " + fileName);
        if (err){
          res.error(err);
        } else {
          res.send(result);
        }
      });
    } else  {
      res
        .status(405)
        .send({status: 'error', code: "NOPERMISSION", error: "No permission"});
    }
});

app.put(instanceName + '/:id' + '/likes', function(req, res) {
    var id = req.params.id,
      result = require(fileName),
      instance = result.filter(function(el){return el[fields.id]  == id})[0],
      data = req.body;

    extend(instance, data);
    fs.writeFile(fileName, JSON.stringify(result), function(err) {
      console.log(err ? err : "JSON saved to " + fileName);
      if (err){
        res.error(err);
      } else {
        res.send(result);
      }
    });
  
});

app.delete(instanceName + '/:id', checkAuth, function(req, res) {
    var id = req.params.id,
      result = require(fileName),
      instance = result.filter(function(el){return el[fields.id] == id})[0],
      instances = result,
      ind = instances.indexOf(instance);
    if (req.user.login === instance[fields.owner]) {
      if (ind >= 0) {
        instances.splice(ind, 1);
      }
      fs.writeFile(fileName, JSON.stringify(result), function(err) {
          console.log(err ? err : "JSON saved to " + fileName);
          if (err){
              res.error(err);
          } else {
              res.send(result);
          }
      });
    } else {
      res
        .status(405)
        .send({status: 'error', code: "NOPERMISSION", error: "No permission"});
    }
});

exports = module.exports = app;

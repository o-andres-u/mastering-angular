var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var md5 = require('MD5');
var rest = require("./rest.js");
var app = express();

function REST() {
  var self = this;
  self.connectMysql();
}

REST.prototype.connectMysql = function() {
  var self = this;
  var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'GOWIN',
    debug: false
  });
  pool.getConnection(function(err, connection) {
    if (err) {
      self.stop(err);
    } else {
      self.configureExpress(connection);
    }
  });
}

REST.prototype.configureExpress = function(connection) {
  var self = this;
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  var router = express.Router();
  app.use('/api', router);
  var rest_router = new rest(router, connection, md5);
  self.startServer();
}

REST.prototype.startServer = function() {
  app.listen(4000, function() {
    console.log("Today is the day! I am alive at port 4000.");
  });
}

REST.prototype.stop = function(err) {
  console.log("MySQL has trouble " + err);
  process.exit(1);
}

new REST();

var mysql = require("mysql");
var uuid = require("node-uuid");

function REST_ROUTER(router, connection, md5) {
  var self = this;
  self.handleRoutes(router, connection, md5);
}

REST_ROUTER.prototype.handleRoutes = function(router, connection, md5) {

  router.get("/", function(req, res) {
    res.json({"Message" : "Hello World!"});
  });

  router.post("/places", function(req, res) {
    var query = "INSERT INTO ??(??,??,??,??,??) VALUES (?,?,?,?,?)";
    var table = ["PLACES","place_uuid","place_name","place_score","place_latitude","place_longitude",
                          uuid.v1(), req.body.name, req.body.score, req.body.latitude, req.body.longitude];

    query = mysql.format(query, table);
    connection.query(query, function(err, rows) {
      if(err) {
        res.json({"Error": true, "Message": "Error executing MySQL query." + err});
      } else {
        res.json({"Error": false, "Message": "User Added!"});
      }
    });
  });

  router.get("/places", function(req, res) {
    var query = "SELECT * FROM ??";
    var table = ["PLACES"]
    query = mysql.format(query, table);
    connection.query(query, function(err, rows) {
      if(err) {
        res.json({"Error": true, "Message": "Error executing MySQL query." + err});
      } else {
        res.json({"Error": false, "Message": "Success", "Users" : rows});
      }
    });
  });

  router.get("/places/:placeName", function(req, res) {
    var query = "SELECT * FROM ?? WHERE ??=?";
    var table = ["PLACES", "place_name", req.params.placeName];
    query = mysql.format(query, table);
    connection.query(query, function(err, rows) {
      if(err) {
        res.json({"Error": true, "Message": "Error executing MySQL query." + err});
      } else {
        res.json({"Error": false, "Message": "Success", "Users": rows});
      }
    });
  });

  router.put("/places", function(req, res) {
    var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    var table = ["PLACES", "place_score", req.body.score, "place_name", req.body.name];
    query = mysql.format(query, table);
    connection.query(query, function(err, rows) {
      if(err) {
        res.json({"Error": true, "Message": "Error executing MySQL query." + err});
      } else {
        res.json({"Error": false, "Message": "Updated the score for " + req.body.name});
      }
    });
  });

  router.delete("/places/:placeName", function(req, res) {
    var query = "DELETE FROM ?? WHERE ??=?";
    var table = ["PLACES", "place_name", req.params.placeName];
    query = mysql.format(query, table);
    connection.query(query, function(err, rows) {
      if (err) {
        res.json({"Error": true, "Message": "Error executing MySQL query. " + err});
      } else {
        res.json({"Error": false, "Message": "Deleted the place with name " + req.params.placeName});
      }
    });
  });

}

module.exports = REST_ROUTER;

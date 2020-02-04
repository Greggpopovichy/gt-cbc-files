// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
app.get("/api/all", function(req, res){
    var queryDB = "SELECT * FROM chirps";

    connection.query(queryDB, function(err, result){
        res.json(result);
    });
});

app.post("api/new", function(req, res){
    console.log("Chirp Data: ");
    console.log(req.body);

    var dbquery = "INSERT INTO chirps (author, body, created_at) VALUES(?,?,?)";
    connection.query(dbquery, [req.body.author, req.body.body, req.body.created_at], function(err, result){
        console.log("Chirp successfully saved!");
        res.end();
    });
});
  // Add a chirp


};

var mysql = require("mysql");
//var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "playlistDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    createEntry();
    updateEntry();
    deleteEntry();
    queryAllSongs();
});

function createEntry(){
    console.log("Inserting a new artist");
    var query = connection.query(
        "INSERT INTO songs SET",
        {
            title: "Check",
            artist: "Young Thug",
            genre: "Rap"
        },
        function(err, res){
        //console.log(res.affectedRows + "entry added!");
        }
    );
    console.log(query.sql);
}

function updateEntry() {
    console.log("Updating songs");
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                quantity:
            },
            {
                flavor: "Rocky Road"
            }
        ],
        function(err, res) {
            console.log(res.affectedRows + " products updated!\n");
            // Call deleteProduct AFTER the UPDATE completes
        }
    );

    // logs the actual query being run
    console.log(query.sql);
}

function deleteEntry() {
    console.log("Deleting all strawberry icecream...\n");
    connection.query(
        "DELETE FROM products WHERE ?",
        {
            flavor: "strawberry"
        },
        function(err, res) {
            console.log(res.affectedRows + " products deleted!\n");
            // Call readProducts AFTER the DELETE completes
        }
    );
}


function queryAllSongs() {
    connection.query("SELECT * FROM songs", function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
        }
        console.log("-----------------------------------");
    });
}

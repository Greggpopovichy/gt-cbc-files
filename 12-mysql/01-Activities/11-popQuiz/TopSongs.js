var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "top_songsDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    querySong();
    querySpecificArtist();
    queryRange();
    queryMultiple();
});

function querySong() {
    connection.query("SELECT * FROM top5000", function(err, res) {
        for (var i = 0; i < res.length; i++) {
            if (res[i].song === "Crocodile Rock") {
                console.log(res[i].position + " | " + res[i].artist + " | " + res[i].song + " | " + res[i].year + " | " + res[i].raw_total + " | " + res[i].raw_usa + " | " + res[i].raw_uk + " | " + res[i].raw_row);
            }
        }
        console.log("-----------------------------------");
    });
}

function querySpecificArtist() {
    connection.query("SELECT * FROM top1000", function(err, res) {
        for (var i = 0; i < res.length; i++) {
            if (res[i].artist === "Elton John") {
                console.log(res[i].position + " | " + res[i].artist + " | " + res[i].song + " | " + res[i].year + " | " + res[i].raw_total + " | " + res[i].raw_usa + " | " + res[i].raw_uk + " | " + res[i].raw_row);
            }
        }
        console.log("-----------------------------------");
    });
}

function queryRange(){
    connection.query("SELECT * FROM top1000", function(err,res){
        for(var i = 0; i < res.length; i++){
            if(res[i].position > 0 && res[i].position <= 10){
                console.log(res[i].position + " | " + res[i].artist + " | " + res[i].song + " | " + res[i].year + " | " + res[i].raw_total + " | " + res[i].raw_usa + " | " + res[i].raw_uk + " | " + res[i].raw_row);
            }
        }
        console.log("-----------------------------------");
    });
}

function queryMultiple(){
    connection.query("SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1", function(err,res){
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].artist);
        }
            console.log("-----------------------------------");
    });
}
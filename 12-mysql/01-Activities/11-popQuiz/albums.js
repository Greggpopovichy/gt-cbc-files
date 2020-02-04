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
    joinTables();
});

function joinTables(){
    connection.query("SELECT top5000.artist, topAlbums.artist FROM top5000 INNER JOIN topAlbums ON top5000.year = topAlbums.year;", function(err, res) {
        for (var i = 0; i < res.length; i++) {
            //console.log(res);
            console.log(res[i].artist + " | " + res[i].song + " | " + res[i].year);
            }
        console.log("-----------------------------------");
    });
}


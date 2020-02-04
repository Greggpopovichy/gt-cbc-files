var http = require("http");
var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

function handleRequest(req, res) {

    var path = req.url;

    switch (path) {

        case "/":
            return displayHome(path, req, res);

        case "/movies":
            return displayMovies(path, req, res);

        case "/frameworks":
            return displayFrameWorks(path, req, res);

        case "/food":
            return displayFood(path, req, res);

        default:
            return display404(path, req, res);
    }
}


function displayHome(url, req, res){
    var myHTML = "<html>" +
        "<body><h1>Home</h1>" + " " +
        "<a href='/'>Go Home</a>" + " | " +
        "<a href='/movies'>Movies</a>" + " | " +
        "<a href='/food'>Food</a>" + " | " +
        "<a href='/frameworks'>Frameworks</a>" +
        "</body></html>";

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(myHTML);
}

function displayMovies(url, req, res){
    var myHTML = "<html>" +
        "<body><h1>Favorite Movies</h1>" + " " +
        "<a href='/movies'>Movies</a>" + " | " +
        "<a href='/'>Home</a>" + " | " +
        "<a href='/food'>Food</a>" + " | " +
        "<a href='/frameworks'>Frameworks</a>" + " | " +
        "<ul><li>It</li><li>Get Out</li><li>Blade Runner 2049</li></ul>" +
        "</body></html>";

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(myHTML);
}

function displayFrameWorks(url, req, res){
    var myHTML = "<html>" +
        "<body><h1>Favorite Frameworks</h1>" + " " +
        "<a href='/frameworks'>Frameworks</a>" + " | " +
        "<a href='/'>Home</a>" + " | " +
        "<a href='/food'>Food</a>" + " | " +
        "<a href='/movies'>Movies</a>" + " | " +
        "<ul><li>Ember</li><li>React</li><li>Angular</li></ul>" +

    "</body></html>";

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(myHTML);
}

function displayFood(url, req, res){
    var myHTML = "<html>" +
        "<body><h1>Favorite Food</h1>" + " " +
        "<a href='/food'>Food</a>" + " | " +
        "<a href='/'>Home</a>" + " | " +
        "<a href='/movies'>Movies</a>" + " | " +
        "<a href='/frameworks'>Frameworks</a>" + " | " +
        "<ul><li>steak</li><li>pasta</li><li>sushi</li></ul>" +
        "</body></html>";

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(myHTML);
}

function display404(url, req, res){
    var myHTML =  "<html>" +
        "<body><h1>404 Not Found </h1>" +
        "<p>The page you were looking for: " + url + " can not be found</p>" +
        "</body></html>";

    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(myHTML);
}
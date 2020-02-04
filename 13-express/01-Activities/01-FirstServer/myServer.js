var http = require("http");
var PORT7000 = 7000;
var PORT7500 = 7500;

function handleNiceRequest(request, response){
    response.end("You're pretty cool." + request.url);
}

function handleMeanRequest(request, response){
    response.end("You suck, go home" + request.url);
}

var server7000 = http.createServer(handleNiceRequest);

server7000.listen(PORT7000, function(){
    console.log("Server listening on: http://localhost:" + PORT7000);
    console.log("You're okay.");
});

var server7500 = http.createServer(handleMeanRequest);

server7500.listen(PORT7500, function(){
    console.log("Server listening on: http://localhost:" + PORT7500);
    console.log("You're lame.");
});


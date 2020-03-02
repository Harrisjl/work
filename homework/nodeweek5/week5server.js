//could not get either one to run

/*var http = require('http')
var server = http.createServer((function (request, response) {
    response.writeHead(200,
        { "Content-Type" : "text/plain"});
respq.end("Hello World\n");
}));
server.listen(7000);

var request = require("request");
request("http://www.google.com", function (error, response, body) {
    console.log(body);
});
*/

var http = require("http");
http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Happy Coding!");

/*var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Happy Coding World!');
    res.end();
  })
  .listen(8080);

/*var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('req.url');
    res.end();
}).listen(8080);
*/

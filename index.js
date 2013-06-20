var fs = require('fs');
var http = require('http');

var config = {
    host: '127.0.0.1',
    port: 8080
};

try {
    config.port = fs.readFileSync(__dirname + '/data/port', 'UTF-8').replace(/\s+$/, '');
} catch (err) {}

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(config.port, config.host);
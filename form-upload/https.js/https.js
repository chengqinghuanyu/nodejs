var https = require('https');
var fs = require('fs');
var options = {
    key: fs.readFileSync('../key.pem'),
    cert: fs.readFileSync('../key-cert.pem')
}
https.createServer(options, function(req, res) {
    res.writeHead(200);
    res.end('https hello');

}).listen(9802, '127.0.0.1');
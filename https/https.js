var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('./cert/chyingp-key.pem'), // 私钥
    cert: fs.readFileSync('./cert/chyingp-cert.pem') // 证书
};

var server = https.createServer(options, function(req, res){
    res.end('这是来自HTTPS服务器的返回');
});

server.listen(3000);
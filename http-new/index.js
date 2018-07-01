/* var http = require('http');
var server = http.createServer(function(req, res) {


    var body = '发发发发发';
    res.setHeader('Content-Length', body.length);
    res.setHeader('Content-type', 'text/plain');
    res.getHeader(body);
    res.removeHeader(body);
    res.write('hello world!');
    res.end('nihao');
});
server.listen(8008, '127.0.0.1'); */
/* 
var http = require('http');
var server = http.createServer(function(req, res) {
    var url = 'http://www.baidu.com';
    var body = "<p>链接<a href=" + url + "></a></p>";
    res.setHeader('Location', url);

    res.setHeader('Content-Lenght', body.length);
    res.setHeader('Content-type', 'text/html');
    res.statusCode = 200;
    res.end(body);
});
server.listen(9800, '127.0.0.1'); */


var http = require('http');
var items = [];
var server = http.createServer(function(req, res) {
    switch (req.method) {
        case 'PSOT':
            var item = '';
            req.setEncoding('utf-8');
            req.on('data', function(chunk) {
                item += chunk;
            });
            req.on('end', function() {
                items.push(item);
                res.end('ok\n');
            });
            break;
        case 'GET':
            /* items.forEach((item, i) => {
                res.write(i + ')' + item + '\n');
            });
            res.end();
            break; */
            var body = items.map(function(item, i) {
                return i + ')' + item;
            }).join('\n');
            res.setHeader('Content-Length', Buffer.byteLength(body));
            res.setHeader('Content-Type', 'text/plain;charset-utf-8');
            res.end(body);
            break;
        case 'DELETE':
            var path = url.parse(req.url).pathname;
            var i = parseInt(path.slice(1), 10);
            if (isNaN(i)) {
                res.statusCode = 400;
                res.end('invalid item id');
            } else if (!items[i]) {
                res.statusCode = 404;
                res.end('item not found');
            } else {
                items.splice(i, 1);
                res.end('ok\n');
            }
            break;
    }
});


server.listen(8080, '127.0.0.1');
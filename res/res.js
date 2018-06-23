var http = require('http');

// 设置状态码、状态描述信息、响应主体
var server = http.createServer(function(req, res){
    // res.writeHead(200,'ok',{
    // 	'content-type':'text/plain'
    // })
    // 
    res.setHeader('Content-Type', 'text/html');
    res.removeHeader('Content-Type')
    res.writeHead(200, 'ok', {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Content-Type-Options': 'nosniff'
    });
     res.write('hello');
    var bg = res.getHeader('content-type');
    console.log(bg)
    setTimeout(function() {
        res.write(' world!');
        res.end();
    }, 2000);

//    res.end('ok');
});

server.listen(3001);
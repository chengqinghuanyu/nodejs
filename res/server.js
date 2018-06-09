var http = require('http');
server = http.createServer(function(req,res){
	console.log("url: "+req.url);
	console.log("httpversion: "+req.httpVersion);
	console.log("method: "+req.method);
	console.log("headers "+JSON.stringify(req.headers));
	res.end('ok')
})
server.listen(30000)
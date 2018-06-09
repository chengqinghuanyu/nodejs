var http = require('http');
server = http.createServer(function(req,res){
	console.log(req.headers);
	res.end('ok');
})
server.listen(3000);
var http = require("http");
var queryString = require("querystring");
var url = require('url');

var server = http.createServer(function(req,res){
	var body = '';
	req.on('data',function(thunk){
		body += thunk;
	
	});
	req.on('end',function(){
		console.log('	post body is:'+body);
		res.end('ok');
	})
});
server.listen(4567)
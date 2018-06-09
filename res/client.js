
var  http = require('http');
http.get('http://127.0.0.1:3000',function(err,res){
	if(err){
		console.log(err);
		return 
	}
	console.log(res.statusCode);
})
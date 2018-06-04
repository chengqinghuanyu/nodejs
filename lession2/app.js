var express = require('express');
var utility = require('utility');

var app = express();


app.get('/',function(req,res){
	console.log(req.query.q)
	var q = req.query.q;
	if(q!= undefined){
		console.log(q)
		var md5Value = utility.md5(q);

		res.send(md5Value);
	}else{
		console.log(q)	
		console.log("没有参数")
		res.send();

	}


	
})

app.listen(3001,function(req,res){
	console.log('app is running at prot 3001-packge.js')
})
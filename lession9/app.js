var express = require('express');
var fibonacci = function(n){
	if(typeof n !== 'number'|| isNaN(n)){
		throw new Error('n should be a Numbr');
	}

	if(n<0){
		throw new Error('n should be >=0');
	}
	if(n>10){
	throw new Error('n should be <=10');
	}

	if(n===0){
		return 0
	}
	if(n===1){
		return 1;
	}

	return fibonacci(n-1)+fibonacci(n-2);

}	


var app = express();
app.get('/fib',function(req,res){
	var n = Number(req.query.n);
	console.log(n)
	try{
		res.send(String(fibonacci(n)));
	}catch(e){
		res.status(500)
		.send(e.message)
	}
})


module.exports = app;
app.listen(3004,function(){
	console.log('app is listening at peort 3004')
})
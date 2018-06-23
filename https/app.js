var https = require('https');
https.get('https://www.baidu.com',function(res){
	console.log(res);

	res.on('data',function(data){
		console.log(data);
		process.stdout.write(data);
	})
}).on('err',function(err){
	console.log(err);
})

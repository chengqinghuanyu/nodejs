var http = require('http');

var options = {
	protocol:'http:',
	hostname:'id.qq.com',
	port:'80',
	path:'/',
	method:'get'
}
var client = http.request(options,function(res){
	var data = '';
	res.setEncoding('utf-8');
	res.on('data',function(chunk){
		data+=chunk
	});
	res.on("end",function(){
		console.log(data)
	})
})
client.end();



http.get('http://id.qq.com',function(res){
var data = '';
res.setEncoding('utf-8');
res.on('data',function(chunk){
	data+= chunk;

})
res.on('end',function(){
	console.log(data)
})

})
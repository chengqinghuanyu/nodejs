var net = require("net");

var PORT =3000;
var HOST = '127.0.0.1';

const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');
/*tcp服务端*/
var server = net.createServer(function(s){
s.on('data',function(data){
	console.log(data);
	s.write('你好我是服务端');

// Buffer.from('你') => <Buffer e4 bd a0>
		const str = decoder.write(Buffer.from(data));
		console.log(str);  // 你
})

s.on('close',function(){
	console.log('链接断开');
})
console.log( server.address() );

})

server.listen(PORT,HOST,function(){
	console.log('服务端检测请求');
})



var fs = require('fs');
var file = fs.createWriteStream('./stdout.txt');
var logger = new console.Console(file,file);
logger.log('hello');
logger.log('ypx');

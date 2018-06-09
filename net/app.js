var net = require("net");
var PORT = 8899;
var HOST = "127.0.0.1";
var server = net.createServer(function(socket){
	console.log('Connct:'+socket.remoteAddress+':'+socket.remotePort);
	socket.on('data',function(data){
		console.log('data'+socket.remoteAddress+':'+data);
		console.log('data is:'+data);
		socket.write('data from you is'+data)
	})
	socket.on('close',function(){
		console.log('close 	'+socket.remoteAddress+' '+ socket.remotePort)
	})
})

server.listen(PORT,HOST)
//console.log(server instanceof net.server)

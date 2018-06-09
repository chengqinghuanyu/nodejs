var dns = require('dns');
dns.lookup('www.dianlf.com',function(err,address,family){
	if(err){
		throw err
	}
	console.log(address)
})

var options = {
	all:true
}

dns.lookup('www.dianlf.com',options,function(err,address,family){
	if(err){
		throw err
	}
	console.log(address);
	//console.log(family)
})
//不受本地代理的影响
dns.resolve4('www.dianlf.com',function(err,address,family){
	if(err) throw err;
	console.log(address)
})


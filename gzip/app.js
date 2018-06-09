// var fs = require('fs');
// var zlib = require('zlib');
// var gzip = zlib.createGzip();
// var inFile = fs.createReadStream('./extra/fileForCompress.txt');

// var out = fs.createWriteStream('./extra/fileForCompress.txt.giz');
// inFile.pipe(gzip).pipe(out);


// var fs = require('fs');
// var zlib = require('zlib');
// var gunzip = zlib.createGunzip();
// var inFile = fs.createReadStream('./extra/fileForCompress.txt.giz');

// var out  = fs.createWriteStream('./extra/fileForCompress1.txt');

// inFile.pipe(gunzip).pipe(out)


// var fs = require('fs');
// var zlib = require('zlib');
// var http = require('http');
// var filepath = './extra/fileForGzip.html';
// var server = http.createServer(function(req,res){
// 						 //req.headers['accept-encoding'];
// 	var acccepEncoding = req.headers['accept-encoding'];
// 	var gzip;

// 	if(acccepEncoding.indexOf('gzip')!=-1){
// 		gzip = zlib.createGzip();
// 		res.writeHead(200,{
// 			'Content-Encoding':'gzip'
// 		})
// 		fs.createReadStream(filepath).pipe(gzip).pipe(res);
// 	}else{
// 		fs.createReadStream(filepath).pipe(res)
// 	}

// })

// server.listen('3000')


var fs = require('fs');
var zlib = require('zlib');
var http = require('http');
var filepath = '发发发 的说法 发大方按时爱妃发发的萨芬艰苦奋斗收购价为而';
var server = http.createServer(function(req,res){
						 //req.headers['accept-encoding'];
	var acccepEncoding = req.headers['accept-encoding'];
	var gzip;

	if(acccepEncoding.indexOf('gzip')!=-1){
		gzip = zlib.createGzip();
		res.writeHead(200,{
			'Content-Encoding':'gzip'
		})
		res.end(zlib.gzipSync(filepath))
	}else{
		res.end(filepath);
	}

})

server.listen('3000')

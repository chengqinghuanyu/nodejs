var fs = require("fs");
var data;
try{
data = fs.readFileSync('./fileForRead.txt', 'utf8');
 console.log('文件内容: ' + data);
}catch(e){
	 console.log('文件内容错误: ' + e);
}


fs.readFile('./fileForRead.txt','utf-8',function(err,data){
	if(err){
		return console.log('读取文件错误',e.message)
	}
	console.log('文件内容异步'+data);
})


//读取大文件

var readStream = fs.createReadStream('./fileForRead.txt','utf-8');
readStream.on("data",function(chunk){
	console.log('读取大数据：'+chunk);
})
.on("err",function(err){
	console.log('读取大数据错误：'+chunk);
})
.on("end",function(){
	console.log("读取完毕")
})
.on("close",function(){
	console.log("关闭")
})



//写入文件
fs.writeFile('./fileForWrite.txt','我们的生活很美好','utf-8',function(err){
	if(err){console.log(err);return}
	console.log("写入成功");
})



//异步写入文件
try{
fs.writeFileSync('./fileForWrite.txt','不要去做那些让人很厌烦的事情',function(err){
console.log('写入成功')
})
}catch(e){
console.log(err);
}



//write stream
var writeStream = fs.createWriteStream('./fileForWrite.txt','utf-8');
writeStream.on("close",function(){
	console.log("一斤关闭")
})
writeStream.write('尹鹏孝');

writeStream.write('徐莹莹');

writeStream.write('爱爱爱');
writeStream.on("end",function(){
	console.log('写完了');
})



//问价是否存在

fs.access('./fileForWrite.txt',function(err){
	
	if(err){
		console.log(err);
		return

	}
	console.log('文件存在')
})

fs.access('./fileForWrite2.txt',function(err){
	
	if(err){
		console.log(err);
		return 

	}
	console.log('文件存在')
})


// fs.mkdir('./ypx22',function(err){
// 	if(err){
// 		throw err;

// 	}
// 	console.log('创建目录成功')
// })

//fs.mkdirSync('./hello')
// fs.unlink('ypx22',function(err){
// 	if(err){
// 		throw err;
// 	}
// 	console.log('删除成功')
// })



//创建目录

// fs.mkdir('subas',function(err){
// 	if(err){
// 		throw err;
		
// 	}
// 	console.log('创建目录成功')
// })


//遍历目录
var path = require('path');

var getFilesIndir = function(dir){

	var results = [path.resolve(dir)];
	var files = fs.readdirSync(dir,'utf-8');

	files.forEach(function(file){
		file = path.resolve(dir,file);
		var stat = fs.statSync(file);
		if(stat.isFile()){
			results.push(file);
		}else if(stat.isDirectory()){
			results = results.concat(getFilesIndir(file))
		}
	})

	return results;
}

var files = getFilesIndir('./');
console.log(files)


//文件重命名
// fs.rename('./hello','worlds',function(err){
// 	if(err){
// 		throw err
// 	}
// 	console.log('重命名成功')
// })

//监听文件修改
var options ={
	prersistent:true,
	interval:2000
}
fs.watchFile('./fileForRead.txt', options ,function(cur,prev){
	console.log('修改时间为：'+cur.mtime)
})
//追加文件
//appendFile
fs.appendFile('./fileForRead.txt', 'helsss大大放送o', 'utf8', function(err){
    if(err) throw err;
    console.log('append成功');
});

//创建一个临时目录
fs.mkdtemp('./tmp',function(err,folder){

	if(err){
		throw err
	}
	console.log('创建临时目录',folder)
})

//删除目录
fs.rmdir('./subas',function(err,folder){
	
	console.log(err);
	if(err){
		throw err
	}

	console.log("删除目录");
})

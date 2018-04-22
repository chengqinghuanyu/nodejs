/*异步加载图片请求*/
function synaLoadImg(url,that){
	console.log(that)
	var promise = new Promise(function(resolve,reject){
		var img = that != null ? that : new Image();

		that.onload = function(){
			console.log(url)
			resolve(url)
		}
		that.onerror = function(){
			reject(new Error("error"))
		}
		that.src= url
		console.log(url)
	})
}
var imgs = document.getElementsByTagName("img")
for(var i=0;i<imgs.length;i++){
	synaLoadImg('https://www.baidu.com/cache/yunying/worldearthday/img/frame.gif',imgs[i])

}


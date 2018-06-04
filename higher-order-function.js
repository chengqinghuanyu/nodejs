/*高阶函数
*1、使用了函数作为参数，
*2、函数的返回值是一个函数
*
*
/*求两个数的二次求和*/
function mg(a,b,fn){
	return fn(a,b)+fn(b,a)
}
function fnb(a,b){
	return (a+b)
}
var ps = mg(10,20,fnb)
console.log(ps)


/*
*
*js中将函数作为返回值
*/
function pdf(a,fn){
	var leng = a.length
	console.log(a)
	return function(){
		if(leng==0){
			return
		}
		console.log(10)
		fn(leng)
	}
}

function psd(ko){
	console.log(ko)

	var k = ko
	console.log("高阶函数中的内容")
	console.log(k)
	var promise = new Promise(function(res,rej){
			if(k==3){
					res(k)
			}else{
				rej(k-1)
			}
			
			
		
	}).then(function(num){

console.log("promise")		
console.log(k+num)
	}).then(function(err){
		console.log("err")
		console.log(k+num)
	}).then(function(num){
		k=k+10
		console.log(k+num)
	}).then(function(num){
		console.log("end")

	},function(ee){
		console.log(ee)
	}).catch(function(){
		console.log("ni好")
	})
}

pdf([10,90,8],psd)([10,90,8])





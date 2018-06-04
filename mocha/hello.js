module.exports = function(...test){
	var sum =0;
	for(let n of test){
		sum+=n;
	}
	return sum;
}
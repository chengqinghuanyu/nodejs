
var async = require('async');

var count=0;
function fetchUrl(url,cb){
    var delay = parseInt((Math.random() * 10000000) % 2000,10);
    count++;
    console.log('出现并发的数量是',count,'正在抓取的url是，',url,',耗时'+delay+'毫秒');
    setTimeout(function () {
        count--;
        cb(null,url+'htmlcontent')
    },delay);

}

var urls = [];
for(var i=0;i<300;i++){
    urls.push('https://datasourse_'+i);

}
async.mapLimit(urls,5,function(url,cb){
    fetchUrl(url,cb);
},function (err,res) {
    console.log('final');
    console.log(res);
})
var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var app = express();
app.get('/',function(req,res,next){
	console.log('进入请求')
	superagent.get('http://www.dianlf.com/guanyuwomen/')
	.end(function(err,sres){
		console.log(err)
		console.log(sres)
		if(err){
			return next(err);
		}

		var $ = cheerio.load(sres.text);
		var items = [];
		$(".g-about-team-lists .clearfix").each(function(idx,element){
			var $element = $(element);
			items.push({
				src:$element.find("img").attr('src'),
				title:$element.find("lists-title").text(),
				text:$element.find(".lists-txt").text()
			})
		})
		console.log(items)
		res.send(items);
	})
})
app.listen(3002,function(){
	console.log('我爬到了宝贝')
})
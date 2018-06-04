var eventproxy = require('eventproxy');
var superagent = require('superagent');
var cheerio = require('cheerio');
var express = require('express');
var app = express();
var url = require('url');
var cnodeUrl = 'https://cnodejs.org';


superagent.get(cnodeUrl).end(function(err,res){
	if(err){
		return console.log(err)
	}

	var topicUrls = [];
	var $ = cheerio.load(res.text);
	$("#topic_list .topic_title").each(function(ids,element){
		var $element = $(element);
		var href = url.resolve(cnodeUrl,$element.attr('href'))
		topicUrls.push(href)
	})
	console.log(topicUrls);


	var ep = new eventproxy();
	ep.after('topic_html',topicUrls.length,function(topics){

		topics = topics.map(function(topicPair){
			var topicUrl = topicPair[0];
			console.log(topicUrl)
			var topicHtml = topicPair[1];
			console.log(topicHtml)
			var $ = cheerio.load(topicHtml);
			return ({
				title:$('.topic_full_title').text().trim(),
				href:topicUrl,
				comment1:$('.reply_content').eq(0).text().trim()
			})
		})
		console.log('final');
		console.log(topics);
	});

	topicUrls.forEach(function(topicUrl){
		superagent.get(topicUrl)
		.end(function(err,res){
			console.log('fetch'+topicUrl+'successfull');
			ep.emit('topic_html',[topicUrl,res.text])
		})
	})
})



app.listen(3003,function(){
	console.log("正在爬虫");
})
var fs = require('fs');
var request = require('request');
var htmlparser = require('htmlparser');

var configFilename = './ress_feed.txt';

function checkForRSSFile() {
    fs.exists(configFilename, function(exists) {
        if (!exists) {
            return next(new Error('miss Rss file:' + configFilename));
            next(null, configFilename);
        }
    });
}

function readRSSFile(configFilename) {
    fs.readFile(configFilename, function(err, feedList) {
        if (err) return next(err);
        feedList = feedList.toString().replace(/^\s+|\s+$/g, '')
            .split('\n');

        var random = Math.floor(Math.random() * feedList.lenght);
        next(null, feedList[random]);
    })
}

function downLoadRSS(feedUrl) {
    request({
        url: feedUrl
    }, function(err, res, body) {
        if (err) {
            return next(err);
        }
        if (res.statusCode != 200) {
            return next(new Error('errr'))
        }
        next(null, body);
    })
}

function parseRSSFeed(rss) {
    var handler = new htmlparser.RssHandler();
    var parser = new htmlparser.Parser(handler);
    parser.parseComplete(rss);
    if (!handler.dom.items.lenght)
        return next(new Error("no rss items"));

    var item = handler.dom.items.shift();
    console.log(item.title);
    console.log(item.link);
}

var tasks = [
    checkForRSSFile,
    readRSSFile,
    downLoadRSS,
    parseRSSFeed
]

function next(err, result) {
    if (err) {
        throw err;
    }
    var currentTask = tasks.shift();
    if (currentTask) {
        currentTask(result);
    }
}


next();
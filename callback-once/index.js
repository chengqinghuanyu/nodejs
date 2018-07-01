/*var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    if (req.url === '/') {
        fs.readFile('./title.json', function(err, data) {
            if (err) {
                console.log(err);
                res.end(err);
            } else {
                var title = JSON.parse(data.toString());
                fs.readFile('./template.html', function(err, data) {
                    if (err) {
                        console.log(err);
                        res.end(err);
                    } else {
                        var teml = data.toString();
                        var html = teml.replace('%', title.join('</li><li>'))
                        res.writeHead(200, {
                            'Content-Type': 'text/html'
                        })
                        res.end(html);

                    }
                })
            }
        });
    }
}).listen(8000, '127.0.0.1');
*/
/*
var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
    getTitle(res);
}).listen(8000, '127.0.0.1');

function getTitle(res) {
    fs.readFile('./title.json', function(err, data) {
        if (err) {
            console.log(err);
            hadError(err, res);
        } else {
            getTemplate(JSON.parse(data.toString()), res);
        }
    });
}

function getTemplate(title, res) {
    fs.readFile('./template.html', function(err, data) {
        if (err) {
            hadError(err, res);
        } else {
            forHtml(title, data.toString(), res);
        }
    })
}

function forHtml(title, tmpl, res) {
    var html = tmpl.replace('%', title.join('</li><li>'));
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.end(html);
}

function hadError(err, res) {
    console.log(err);
    res.end('server err');
}*/
/* var net = require('net');
var server = net.createServer(function(socket) {
    socket.on('data', function(data) {
        console.log(new Buffer(data))
        var ms = new Buffer(data);
        socket.write(ms);
    })
});

server.listen(8888, '127.0.0.1'); */

/* 
var net = require('net');
var server = net.createServer(function(socket) {
    socket.once('data', function(data) {
        socket.write('data');
    })
})
server.listen(8888, '127.0.0.1'); */

/* var EventEmitter = require('events').EventEmitter;
var chanel = new EventEmitter();
chanel.on('join', function() {
    console.log('welcome');
});


chanel.emit('join');

 */


/* var events = require('events');
var myEimtter = new events().EventEmitter();
myEimtter.on('error', function(err) {
    console.log('error' + err.message);
});

myEimtter.emit('error', new Error('something is wrong.'));

process.on('uncaughtException', function(err) {
    console.log(err.stack);
    process.exit(1);
});

 */

/* 
function Watcher(watchDir, processedDir) {
    this.watchDir = watchDir;
    this.processedDir = processedDir;
}

var event = require('events');
var util = require('util');
util.inherits(Watcher, event.EventEmitter);


var fs = require('fs');
var watchDir = './watch';
var processedDir = './done';
Watcher.prototype.watch = function() {
    var watcher = this;
    fs.readdir(this.watchDir, function(err, files) {
        if (err) {
            throw err;
        }
        for (var index in files) {
            watcher.emit('process', files[index]);
        }
    })
}

Watcher.prototype.start = function() {
    var watcher = this;
    fs.watchFile(watchDir, function() {
        watcher.watch();
    })
}

Watcher.on('process', function(file) {
    var watchFile = this.watchDir + '/' + file;
    var processFile = this.processedDir + './' + file.toLowerCase();
    fs.rename(watchFile, processFile, function(err) {
        if (err) {
            throw err;
        }
    })
})


watch.start(); */

/*
function asyncFunction(callback) {
    setTimeout(callback, 11200);
}

var color = 'bule';

(function(color) {

    asyncFunction(function() {
        console.log('this color is ' + color);
    });

})(color)

color = 'green';
*/

/*
setTimeout(() => {
    console.log('firt');
    setTimeout(() => {
        console.log('next');
        setTimeout(() => {
            console.log('last');
        }, 100);
    }, 500);
}, 1000);
*/


var flow = require('nimble');
flow.series([
    function(callback) {
        setTimeout(() => {
            callback();
            console.log('first');
        }, 1000);
    },
    function(callback) {
        setTimeout(() => {
            callback();
            console.log('next');
        }, 500);
    },
    function(callback) {
        setTimeout(() => {
            console.log('last');
            callback();
        }, 100);
    }
]);
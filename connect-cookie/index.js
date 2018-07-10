var connect = require('connect');
var app = connect()
    .use(connect.cookieParser('tobi is a cool feret'))
    .use(function(req, res) {
        console.log(req.cookie);
        console.log(req.signedCookies);
        res.end('hello \n');
    }).listen(3000)
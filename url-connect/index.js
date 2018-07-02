var connect = require('connect');
var url = require('url');
/* var app = connect()
    .use(rewrite)
    .use(showPost)
    .listen(3000, '127.0.0.1');


var path = url.parse(req.url).pathname;

function rewrite(req, res, next) {
    var match = path.match(/^\/blog\/posts\/(.+)/);
    if (match) {
        findPostIdBySlug(match[1], function(err, id) {
            if (err) {
                return next(err);
            }
            if (!id) {
                return next(new Error('User not found'));
            }
            req.url = '/blog/posts/' + id;
            next();
        })
    } else {
        next();
    }
} */


/*错误中间件*/
/* function errorHandler() {
    var env = process.env.NODE_ENV || 'development';
    return function(err, req, res, next) {
        res.statusCode = 500;
        switch (env) {
            case 'development':
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(err));

                break;

            default:
                res.end('server error');
                break;
        }
    }
}


connect()
    .use(router(require('./routers/user')))
    .use(router(require('./routers/blog')))
    .use(router(require('./routers/admin')))
    .use(errorHandler());
 */

/*错误处理中间件*/
/*api错误搜集*/
var api = connect()
    .use(users)
    .use(pets)
    .use(errorHandlers).listen(8900, '127.0.0.1')
    /* var app = connect()
        .use(hello)
        .use('/api', api)
        .use(errPage)
        .listen(9880, '127.0.0.1');
     */
function hello(req, res, next) {
    console.log('hepp');
    if (req.url.match(/^\/hello/)) {
        res.end('hello world \n');
    } else {
        next()
    }
}



var db = {
    users: [{
            name: 'tobi'
        },
        {
            name: 'loki'
        },
        {
            name: 'jane'
        }
    ]
};

function users(req, res, next) {
    console.log('user');
    var match = req.url.match(/^\/user\/(.+)/);
    console.log('user');
    console.log(match)
    if (match) {
        var user = db.users[match[1]];
        console.log(user)
        if (user) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(user));
        } else {
            err = new Error('user not flund')
        }
    } else {
        next();
    }
}


function errorHandlers(err, req, res, next) {
    console.log('err');
    res.setHeader('Content-Type', 'application/json');
    console.log(err.notFound);
    if (err.notFound) {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: err.message }));
    } else {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'interal server error' }));
    }
}



function pets(req, res, next) {
    console.log('pet');
    if (req.url.match(/^\/pet\/(.+)/)) {
        foo()
    } else {
        //res.end('err');
        next()
    }
}

function foo() {
    console.log(11)
}


function errPage(req, res, next) {
    //if(req.url.match){}
    res.setHeader('Content-Type', 'application/json')
    res.end('err-404')
}
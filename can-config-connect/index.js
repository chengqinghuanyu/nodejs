var connect = require('connect');
var app = connect()
    .use(setup({ some: 'options' }))
    .listen(3000, '127.0.0.1');

function setup(format) {
    console.log(format);
    format = JSON.stringify(format)
    var regexp = /:(\w+)/g;
    return function logger(req, res, next) {
        var str = format.replace(regexp, function(match, property) {
            console.log(property);
            return req[property];
        })
        console.log(str);
        next();
    }
}

module.exports = setup;
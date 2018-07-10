var Photo = require('../models/Photo');
var mysql = require('mysql');
var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'test'
});
exports.myinfo = function(req, res, next) {

    var myrows = []
    var querysea = "SELECT * FROM znonz_users " +
        "ORDER BY date DESC";
    db.query(querysea, [], function(err, rows) {
        if (err) { throw err; return };
        myrows = rows;
        myrows = JSON.stringify(myrows)
        myrows = JSON.parse(myrows)
        res.render('photos/myinfo', {
            title: '个人信息',
            mg: myrows
        })
    })





    //var mynewData = JSON.stringify(req.body)



    //next();
}
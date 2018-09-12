var db = require('../connect/c_db');
var mysqls = require('../db/com_mysql');
exports.myinfo = function(req, res, next) {
    var myrows = []
        //var querysea = "SELECT * FROM znonz_users " + "ORDER BY date DESC";
    var querysea = mysqls.myinfo.sql
    db.query(querysea, [], function(err, rows) {
        if (err) { throw err; return };
        myrows = rows;
        myrows = JSON.stringify(myrows)
        myrows = JSON.parse(myrows)
        res.render('photos/myinfo', {
            title: '个人信息',
            mg: myrows,
            list: {
                href: '/info',
                text: '查看信息'
            }
        })
    })

}
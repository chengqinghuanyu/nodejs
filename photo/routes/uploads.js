var db = require('../connect/c_db');
var mysqls = require('../db/com_mysql');
exports.submit = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    res.statusCode = 200;
    var date = new Date().getTime();
    var datas = req.body;
    var dbs = mysqls.uploads.sql;
    db.query(dbs, [date, datas.name, datas.address, datas.tel, datas.himg],
        function(err) {
            if (err) throw err;
        }
    );
    var mynewData = JSON.stringify(datas);
    res.end(mynewData);
}

exports.form = function(req, res) {
    res.render('photos/uploads', {
        title: '提交信息'
    })
}
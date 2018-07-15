exports.form = function(req, res) {
    console.log(111);
    res.render('photos/uploads', {
        title: '提交信息'
    })
}

var Photo = require('../models/Photo');
var mysql = require('mysql');
var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'test'
});
exports.submit = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    res.statusCode = 200;
    var date = new Date().getTime();
    var datas = req.body;

    db.query(
        "INSERT INTO znonz_users (date,name,address,tel,himg)  " +
        "VALUES (?, ?, ?, ?, ?)", [date, datas.name, datas.address, datas.tel, datas.himg],
        function(err) {
            if (err) throw err;
        }
    );
    var mynewData = JSON.stringify(datas);
    res.end(mynewData);



    //next();
}
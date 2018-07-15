var mysql = require('mysql');
var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'test'
});
console.log(123);

exports.upInfo = function(req, res) {
    console.log(444);
    var id = parseInt(req.query.id);
    console.log(id);
    var myrows;
    var sql = "select * from `test`.`znonz_users`  where id=" + id;
    db.query(sql, function(err, rows) {
        console.log(123)
        if (err) {
            throw err;
        } else {
            myrows = JSON.stringify(rows)
            myrows = JSON.parse(myrows)
            console.log(myrows);
            //res.redirect('/upinfo');

            res.render('photos/upinfo', {
                title: '修改用户信息',
                my: myrows[0]
            });
        }
        console.log(id);
        //res.readrctTo('/dele')


    })
}
exports.update = function(req, res) {
    console.log(req.body);
    var id = req.body.id;
    var name = req.body.name;
    var address = req.body.address;
    var tel = req.body.tel;
    var sql = "update znonz_users set name = '" + name + "',address = '" + address + "',tel = '" + tel + "' where id = " + id;
    console.log(sql);
    db.query(sql, function(err, rows) {
        if (err) {
            res.send("修改失败 " + err);
        } else {
            res.send(rows);
        }
    });
}
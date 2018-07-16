var db = require('../connect/c_db');
var mysqls = require('../db/com_mysql');
exports.del = function(req, res) {
    var id = parseInt(req.body.id)
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Content-Type", "application/json;charset=utf-8");
    var dele = mysqls.delet.sql;
    db.query(dele, [id], function(err) {
        if (err) {
            throw err;
        } else {
            var datas = req.body;
            res.statusCode = 200;
            console.log(datas);
            //console.log(err);
            res.redirect('/myinfo');
            res.end('删除成功！');
        }
        console.log(id);
        //res.readrctTo('/dele')
    })
}
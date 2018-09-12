var db = require('../connect/c_db');
var mysqls = require('../db/com_mysql');
exports.submit = function(req, res) {
    //req.setCharacterEncoding('UTF-8');
    res.status(200);
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
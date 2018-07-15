var mysql = require('mysql');
var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'test'
});
exports.del = function(req, res) {

    var id = parseInt(datas.id)
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Content-Type", "application/json;charset=utf-8");

    db.query("DELETE FROM znonz_users WHERE id=?", [id], function(err) {
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
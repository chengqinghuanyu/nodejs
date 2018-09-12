var obj = {
    data: [{
            id: 213,
            num: 444,
            name: '尹鹏孝',
            age: 12,
            sex: '男'
        },
        {
            id: 456,
            num: 678,
            age: 13,
            name: '高丹',
            sex: '女'
        }
    ],
    status: {
        num: 200,
        text: '请求成功'
    }
}
exports.testDatas = {
    cbs: function(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.status(200);
        res.json(obj);
    }
}
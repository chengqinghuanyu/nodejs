var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: '尹鹏孝的node-express',
        body: 'Body is heath!',
        href: {
            link: '/myinfo',
            text: '查看列表信息'
        }
    });
});

module.exports = router;
/*图片上传*/
var multer = require('multer')
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/images')
    },
    filename: function(req, file, cb) {
        console.log("输出文件原始名称:");
        console.log(file.originalname)

        cb(null, 'znonz_img' + '_' + Date.now() + '.' + imgSuffix(file));
    }
});

function imgSuffix(file) {
    var suffix = "";
    switch (file.mimetype) {
        case 'image/png':
            suffix = "png"
            break;
        case 'image/jpg':
            suffix = "jpg"
            break;
        case 'image/jpeg':
            suffix = "jpg"
            break;
        default:
            suffix = "";
            break;
    }

    return suffix;
}

var limits = {
    fieldNameSize: 100,
    fieldSize: 2,
    headerPairs: 100
}
var upload = multer({
    storage: storage,
    limits: limits
});

function fileFilter(req, file, cb) {

    // 这个函数应该调用 `cb` 用boolean值来
    // 指示是否应接受该文件

    // 拒绝这个文件，使用`false`，像这样:
    cb(null, false)

    // 接受这个文件，使用`true`，像这样:
    cb(null, true)

    // 如果有问题，你可以总是这样发送一个错误:
    cb(new Error('I don\'t have a clue!'))

}

function callback(req, res, next) {
    console.log(req.file);
    var url = 'http://' + req.headers.host + '/images/' + req.file.filename;
    res.json({
        code: 200,
        data: url
    })
}
exports.himg = {
    cb: callback,
    str: upload.single('file')
}
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
var createError = require('http-errors');
var Photo = require('./models/Photo');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var uploads = require('./routes/uploads');
var myinfo = require('./routes/myinfo');
var dele = require('./routes/dele');
var updates = require('./routes/update');
var ERR = require('./routes/404');
var himg = require('./routes/himg');
var testDatas = require('./routes/get-datas');
var postDatas = require('./routes/post-data');
var app = express();
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
/*新增入口*/
app.use('/uploads', uploads.form);
/*提交接口*/
app.post('/uploadsimg', uploads.submit);
/*信息列表*/
app.use('/myinfo', myinfo.myinfo);
/*删除接口*/
app.post('/dele', dele.del);
/*展示修改信息页面*/
app.use('/upinfo', updates.upInfo);
/*修改数据接口*/
app.post('/update', updates.update);
/*图片上传*/
app.post('/himg', himg.himg.str, himg.himg.cb);

app.get('/api/getdatas', testDatas.testDatas.cbs);
app.post('/api/submit/userinfo', postDatas.submit);

/* catch 404 and forward to error handler*/
app.use(function(req, res, next) {
    //next(createError(404));
    var err = new Error('Not Found');
    err.status = 404;　　
    res.render('photos/404');
    next()
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
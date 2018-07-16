//var express = require('express');
var mysql = require('mysql');
var pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'test'
});

exports.query = function(sql, P, C) {
    var params = [];
    var callback;
    // 如果用户传入了两个参数，就是SQL和callback
    if (arguments.length == 2 && typeof arguments[1] == 'function') {
        callback = P;
    } else if (arguments.length == 3 && Array.isArray(arguments[1]) && typeof arguments[2] == 'function') {
        params = P;
        callback = C;
    } else {
        throw new Error('对不起，参数个数不匹配或者参数类型错误');
    }
    // 如果用户传入了三个参数，那么就是SQL和参数数组、回调函数
    // 从池子里面拿一个可以使用的连接
    pool.getConnection(function(err, connection) {
        // Use the connection
        connection.query(sql, params, function() {
            // 使用完毕之后，将该连接释放回连接池
            connection.release();
            callback.apply(null, arguments);
        });
    });
};
 var express = require('express');
 var db = require('../connect/c_db');
 db.query(
     "CREATE TABLE IF NOT EXISTS znonz_users (" +
     "id INT(10) NOT NULL AUTO_INCREMENT," +
     "date BIGINT(20) DEFAULT 0," +
     "name VARCHAR(26) DEFAULT ''," +
     "address LONGTEXT," +
     "tel BIGINT(11)," +
     "himg VARCHAR(200)," +
     "PRIMARY KEY(id))",
     function(err) {
         if (err) {
             throw err;
         }
         console.log('server stared ...');
         //server.listen(3000, '127.0.0.1');
     }
 );
 //module.exports = db.module('Photo', schema)
const db = require('../db.js');
module.exports = db.defineModel('users',{
	email:{
		type:db.STRING(100),
		unique:true
	},
	passwd:db.STRING(100),
	name:db.STRING(100),
	gender:db.BOOLEAN
});
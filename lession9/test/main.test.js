var app = require('../app');
var supertest = require('supertest');
var request = supertest(app);   
var should = require('should');
describe('test/main.test.js',function(){
	it('should be return 55 when n is 10',function(done){
		request.get('/fib')
		.query({
			n:10
		})
		.end(function(err,res){
			res.text.should.equal('55');
			done(err);
		})
	})

	var testFib = function(n,statusCode,expect,done){
		request.get('fib')
		.query({
			n:n
		})
		.expect(statusCode)
		.end(function(err,res){
			res.text.should.equal(expect);
			done(err);
		})
	}

	it('should return 0 when 0 ===0',function(done){
		testFib(0,200,'0',done);
	}) 

	it('should be equal 1 when n===1',function(done){
		testFib(1,200,'1',done);
	})
	it('should be equal 55 when n===10',function(done){
		testFib(10,200,'55',done);
	})
	it('should throw when n>10',function(done){
		testFib(11,500,'n should be<-10',done);
	})

	it('should throw when n<1',function(done){
		testFib(-1,500,'n should be>=0',done);
	})

	it('should throw when n is not Number',function(done){
		testFib('good',500,'n should be a Number',done);
	})

	it('should status 500 when error',function(done){
		request.get('fib')
		.expect({
			n:100
		})
		.end(function(err,done){
			done(err)
		})
	})





})
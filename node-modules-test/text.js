// var curren = require('./index');

// console.log('50 canadian dollars eque amount of us dollars');
// console.log(curren.candaToUS(50));
// console.log('30 US canada dollars eque this amount of canada dollers');
// console.log(curren.USTocanadian(30));
var Curency = require('./index-new');
var canadaDollar = 0.91;
var currency = new Curency(canadaDollar);
console.log(currency.canadianToUS(50));
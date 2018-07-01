var Currency = function(dollar) {
    this.dollar = dollar;
}
Currency.prototype.canadianToUS = function(canadian) {
    return this.roundTwoDecimals(canadian * this.dollar);
}
Currency.prototype.roundTwoDecimals = function(amounts) {
    return Math.random(amounts * 100) / 100;
}

Currency.prototype.USToCanadian = function(us) {
    return this.roundTwoDecimals(us / this.dollar);
}

module.exports = Currency;
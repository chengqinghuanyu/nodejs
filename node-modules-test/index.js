var candadianDollor = 0.91;

function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}

exports.candaToUS = function(canadian) {
    return roundTwoDecimals(canadian * candadianDollor);
}

exports.USTocanadian = function(us) {
    return roundTwoDecimals(us / candadianDollor)
}
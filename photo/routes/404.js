exports.onerr = function(req, res) {
    res.on('error', function(err) {
        res.redirect('/404');
    })

}
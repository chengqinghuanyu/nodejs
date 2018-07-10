var photos = [];
photos.push({
    name: 'Node js Logo',
    path: 'https://nodejs.org//static/images/logo.svg'
});

photos.push({
    name: 'somking',
    path: 'http://nodejs.org/images/ryan-speaker.jpg'
})

exports.list = function(req, res) {
    res.render('photos', {
        title: 'Photos',
        photos: photos
    })
}
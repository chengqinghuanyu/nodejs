const request = require('supertest');
const app = require('../app');

describe('#test koa app', () => {

    let server = app.listen(9900);

    describe('#test server', () => {

        before(()=>{
            console.log('before')
        })
        after(()=>{
            console.log('after')
        })

        beforeEach(()=>{
            console.log(' beforeEach')
        })
        afterEach(()=>{
            console.log(' afterEach')
        })

        it('#test GET /', async () => {
            let res = await request(server)
                .get('/')
                .expect('Content-Type', /text\/html/)
                .expect(200, `<h1>Hello, world!</h1>`);
        });

        it('#test GET /path?name=Bob', async () => {
            let res = await request(server)
                .get('/path?name=Bob')
                .expect('Content-Type', /text\/html/)
                .expect(200, `<h1>Hello, Bob!</h1>`);
        });
    });
});
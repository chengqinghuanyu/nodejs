const assert = require('assert');

const hello = require('../hello');

describe('#async hello', () => {
    describe('#asyncCalculate()', () => {
        before(()=>{
            console.log('before')
        })
        after(()=>{
            console.log('after')
        })
        beforeEach(()=>{
            console.log('  beforeEach')
        })

        afterEach(()=>{
            console.log('  afterEach')
        })



        /*it('#async with done', (done) => {
            (async function () {
                try {
                    let r = await hello();
                    assert.strictEqual(r, 15);
                    done();
                } catch (err) {
                    done(err);
                }
            })();
        });*/

        it('#async function', async () => {
            let r = await hello();
            assert.strictEqual(r, 15);
        });

        it('#sync function', () => {
            assert(true);
        });
    });
});
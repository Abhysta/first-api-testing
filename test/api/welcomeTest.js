const assert = require('chai').assert;
const app = require('../../assert')

//Assertning
describe('Welcome Test', function () {
    it('app should return message', function(){
        assert.equal(app(), "welcome message")
    })
})
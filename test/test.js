var assert = require('chai').assert
  , num = -1
  , array = [1,2,3];
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(num, array.indexOf(5));
      assert.equal(num, array.indexOf(0));
    });
  });
});

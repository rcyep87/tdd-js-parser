var assert = require('chai').assert;
var AMLTranslate = require('../scripts/parser');

describe("AMLTranslate", function () {
  it("should have a method called translate", function () {
    assert.isFunction(AMLTranslate, "function does exist!");
  });
});

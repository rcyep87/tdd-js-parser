module.exports = function () {
  var foobar = function () {
    return "HI";
  }
  return {
    translate: function () {
      return foobar();
    }
  }
};

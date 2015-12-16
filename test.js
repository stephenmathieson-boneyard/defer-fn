
var assert = require('assert');
var defer = require('./');

describe('defer(fn, [ms])', function(){
  it('should return a function', function(){
    var fn = defer(function(){});
    assert('function' == typeof fn);
  });

  describe('the returned function', function(){
    it('should be deferred', function(done){
      var x = 1;
      var deferred = defer(function() {
        x = 7;
      }, 10);

      deferred();
      assert.equal(x, 1);
      setTimeout(function(){
        assert.equal(x, 7);
        done();
      }, 11);
    })
  });
});

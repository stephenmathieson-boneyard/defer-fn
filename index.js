
/**
 * Expose `defer`.
 */

module.exports = defer;

/**
 * Get version of `fn` deferred by `ms` (default: 100).  Will
 * keep contextual `this` and delegate all arguments.
 *
 * @param {Function} fn
 * @param {Number} [ms]
 * @return {Function}
 * @api public
 */

function defer(fn, ms){
  ms = ms || 100;
  return function(){
    var args = [].slice.call(arguments);
    var ctx = this;
    setTimeout(function(){
      fn.apply(ctx, args);
    }, ms);
  };
}

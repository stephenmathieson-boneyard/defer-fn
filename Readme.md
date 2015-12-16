
# defer-fn

  Defer the execution of a function.

## Example

```js
var assert = require('assert');
var defer = require('defer-fn');

var x = 1;
var deferred = defer(function() {
  x = 7;
}, 10);

deferred();
assert.equal(x, 1);
setTimeout(function(){
  assert.equal(x, 7);
}, 11);
```

## License

  MIT

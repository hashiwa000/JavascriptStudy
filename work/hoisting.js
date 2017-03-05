'use strict'

var x = 'global';

var f = function(x) {
  console.log(x);   //=> arg
  var x = 'local';
  console.log(x);   //=> local
}

var g = function() {
  console.log(x);   //=> undefined
  var x = 'defined';
  console.log(x);   //=> defined
}

f('arg');
g();

'use strict'

var x = 'global';

var f = function() {
  var x = 'local';
  return x;
}

var g1 = function() {
  var v = 'first';
  if (v == v) {
    var v = 'second';
  }
  return v;
}

var g2 = function() {
  let v = 'first';
  if (v == v) {
    let v = 'second';
  }
  return v;
}

console.log(x);   //=> 'global'
console.log(f()); //=> 'local'
console.log(x);   //=> 'global'

console.log(g1()); //=> 'second'
console.log(g2()); //=> 'first'


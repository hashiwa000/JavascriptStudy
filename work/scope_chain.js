'use strict'

var x = 'global';

function first_func() {
  var y = 'var in first_func';
  console.log('first_func: x is [' + x + ']');
  console.log('first_func: y is [' + y + ']');

  function second_func() {
    var z = 'var in second_func';
    console.log('second_func: x is [' + x + ']');
    console.log('second_func: y is [' + y + ']');
    console.log('second_func: z is [' + z + ']');
  }
  second_func();
  return second_func;
}

var _second_func = first_func();
console.log('---');
_second_func();

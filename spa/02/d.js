'use strict'

// Closure
var makeCounter = function(initial=0) {
  var i = initial;
  return function() {
    return i++;
  }
}

var makeCounter2 = function(initial=0) {
  return {
    count: initial,
    increment: function() {
      return this.count++;
    }
  }
}

var counter,
    counter2;

counter = makeCounter();
console.log(counter()); //=> 0
console.log(counter()); //=> 1
console.log(counter()); //=> 2

counter = makeCounter(5);
console.log(counter()); //=> 5
console.log(counter()); //=> 6
console.log(counter()); //=> 7

counter2 = makeCounter2();
console.log(counter2.increment()); //=> 0
console.log(counter2.increment()); //=> 1
console.log(counter2.increment()); //=> 2

counter2 = makeCounter2(10);
console.log(counter2.increment()); //=> 10
console.log(counter2.increment()); //=> 11
console.log(counter2.increment()); //=> 12


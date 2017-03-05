"use strict";

var a = {
  foo: function() {
    //console.log(this === window);

    // global object is 'undefined'
    // when use node.js and strict mode
    console.log(this === undefined);
  }
}

a.foo();
(0, a.foo)();


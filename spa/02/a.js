var proto = {
  sentence: 4,
  probation: 2
};

var Prisoner = function(name, id) {
  this.name = name;
  this.id = id;
};
Prisoner.prototype = proto;

var firstPrisoner = new Prisoner('Joe', '12A');
var secondPrisoner = new Prisoner('Sam', '2BC');

console.log(firstPrisoner);
console.log(firstPrisoner.sentence);
console.log(secondPrisoner);


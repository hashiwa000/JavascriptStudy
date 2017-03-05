var proto = {
      sentence: 4,
      probation: 2
    },
    firstPrisoner,
    secondPrisoner;

var Prisoner = function(name, id) {
  this.name = name;
  this.id = id;
};
Prisoner.prototype = proto;

firstPrisoner = new Prisoner('Joe', '12A');
secondPrisoner = new Prisoner('Sam', '2BC');

console.log(firstPrisoner);
console.log(firstPrisoner.sentence);
console.log(secondPrisoner);


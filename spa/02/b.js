var proto = {
  sentence: 4,
  probation: 2
};

var makePrisoner = function(name, id) {
  var p = Object.create(proto);
  p.name = name;
  p.id = id;
  return p;
}

var firstPrisoner = makePrisoner('Joe', '12A');
var secondPrisoner = makePrisoner('Sam', '2BC');

console.log(firstPrisoner);
console.log(firstPrisoner.sentence);
console.log(secondPrisoner);

//---

firstPrisoner.sentence = 5;
console.log(firstPrisoner.sentence);  //=> 5
console.log(secondPrisoner.sentence); //=> 4

delete firstPrisoner.sentence
console.log(firstPrisoner.sentence);  //=> 4
console.log(secondPrisoner.sentence); //=> 4

firstPrisoner.__proto__.sentence = 5;
console.log(firstPrisoner.sentence);  //=> 5
console.log(secondPrisoner.sentence); //=> 5




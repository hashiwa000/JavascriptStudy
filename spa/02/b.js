var proto = {
      sentence: 4,
      probation: 2
    },
    firstPrisoner,
    secondPrisoner;

var makePrisoner = function(name, id) {
  var p = Object.create(proto);
  p.name = name;
  p.id = id;
  return p;
}

firstPrisoner = makePrisoner('Joe', '12A');
secondPrisoner = makePrisoner('Sam', '2BC');

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




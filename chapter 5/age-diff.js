function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var hasKnownMother = ancestry.filter(function(person) {
  return byName[person.mother] != null;
});

var difference = hasKnownMother.map(function(person) {
  return person.born - byName[person.mother].born;
});

console.log(average(difference));
// → 31.2

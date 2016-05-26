var myArrays = [[1, 2, 3], [4, 5], [6]];

var flatten = function(flat, current) {
  return flat.concat(current);
};

console.log(myArrays.reduce(flatten));
// → [1, 2, 3, 4, 5, 6]

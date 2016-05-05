function reverseArray(array) {
  var reversed = [];
  for (var i = 0; i < array.length; i++)
    reversed.unshift(array[i]);
  return reversed;
};

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
};

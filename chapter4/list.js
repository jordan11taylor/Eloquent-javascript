function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
};

function listToArray(list) {
  array = []
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
};

function prepend(value, list) {
  return {value: value, rest: list};
};

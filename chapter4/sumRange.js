function range(start, end) {
  var numbers = [];
  for (var i = start; i <= end; i++)
    numbers.push(i);
  return numbers;
};

function sum(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++)
    total += numbers[i];
  return total;
};

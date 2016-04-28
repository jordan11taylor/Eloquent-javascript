function countChar(string, char) {
  var counted = 0;

  for (var count = 0; count < string.length; count++)
    if (string.charAt(count) == char)
      counted += 1;
  return counted;
};

function countBs(string) {
	return countChar(string, "B");
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

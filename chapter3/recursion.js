function isEven(n) {
  if (n == 0)
    return 'even';
  else if ((n % 10) == 1)
    return 'odd';
  else if ((n % 10) < 0)
    return isEven(-n);
  else
    return isEven((n % 10) - 2);
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

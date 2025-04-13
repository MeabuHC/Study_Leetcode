/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x <= 0) return false;

  var stack = [];

  while (x != 0) {
    var digit = x % 10;
    if (stack[stack.length - 1] === digit) stack.pop();
    else stack.push(x % 10);
    x = Math.floor(x / 10);
  }

  return stack.length <= 1;
};

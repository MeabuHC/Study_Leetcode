/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x <= 0) return false;

  var stack = [];

  while (x != 0) {
    stack.push(x % 10);
    x = x / 10;
  }
};

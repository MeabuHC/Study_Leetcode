/**
 * @param {number} x
 * @return {boolean}
 */
/* Reconstruct the number */
var isPalindrome = function (x) {
  if (x < 0) return false;

  var reversed = 0;
  var copy = x;
  while (copy !== 0) {
    reversed = reversed * 10 + (copy % 10);
    copy = Math.floor(copy / 10);
  }

  return reversed === x;
};

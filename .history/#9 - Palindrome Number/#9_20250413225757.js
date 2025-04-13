/**
 * @param {number} x
 * @return {boolean}
 */
/* Comparing start and end, can do with string or array either way */
var isPalindrome = function (x) {
  if (x < 0) return false;

  var array = [];
  var flag = true;

  while (x != 0) {
    array.push(x % 10);
    x = Math.floor(x / 10);
  }

  while (flag) {
    if (array.length <= 1) return true;
    flag = array[0] === array[array.length - 1];
    if (flag) {
      array.pop();
      array.shift();
    } else {
      return false;
    }
  }

  return true;
};

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

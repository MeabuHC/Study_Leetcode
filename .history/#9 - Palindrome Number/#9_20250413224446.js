/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x <= 0) return false;

  var array = [];

  while (x != 0) {
    var digit = x % 10;
    if (array[0] === digit) array.pop();
    else array.push(x % 10);
    x = Math.floor(x / 10);
  }

  return array.length <= 1;
};

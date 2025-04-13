/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x <= 0) return false;

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
};

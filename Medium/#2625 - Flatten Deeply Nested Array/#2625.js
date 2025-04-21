/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  if (n == 0) return arr;
  else {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        var length = arr[i].length;
        arr.splice(i, 1, ...arr[i]);
        i += length - 1;
      }
    }
    return flat(arr, n - 1);
  }
};

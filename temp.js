/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  var count = 1;
  var writePos = 0;

  for (var i = 1; i <= chars.length; i++) {
    if (i < chars.length && chars[i] === chars[i - 1]) {
      count += 1;
    } else {
      chars[writePos++] = chars[i - 1];

      if (count > 1) {
        for (var digit of count.toString()) {
          chars[writePos++] = digit;
        }
      }

      count = 1;
    }
  }

  return writePos;
};

compress(["a", "a", "b", "b", "c", "c", "c"]);

/**
 * Compresses the input array of characters in-place using run-length encoding.
 * Replaces sequences of the same character with the character followed by its count
 * (if greater than 1). Returns the new length of the compressed array.
 *
 * Example:
 * Input:  ["a","a","b","b","c","c","c"]
 * Output: ["a","2","b","2","c","3"], returns 6
 *
 * The function uses a write pointer to overwrite the original array and a counter
 * to track repeated characters. It avoids boundary issues by running the loop one
 * step beyond the array length and checking bounds before accessing elements.
 *
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  var count = 1;
  var writePos = 0;

  for (var i = 1; i <= chars.length; i++) {
    if (i < chars.length && chars[i] === chars[i - 1]) count += 1;
    else {
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

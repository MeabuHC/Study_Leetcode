/**
 * @param {string} s
 * @return {string}
 */

/**
 * Reverses only the vowels in a given string.
 *
 * Logic:
 * - Strings in JavaScript are immutable, so we convert the input string `s` into an array `arr`
 *   to allow character swapping.
 * - We use two pointers: `i` starts at the beginning, `y` starts at the end of the array.
 * - Move `i` forward until it points to a vowel.
 * - Move `y` backward until it points to a vowel.
 * - If both `i` and `y` are pointing to vowels and `i < y`, swap the characters at those positions.
 * - Repeat until the two pointers meet or cross.
 * - Finally, join the array back into a string and return it.
 */

var reverseVowels = function (s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  var arr = s.split("");
  for (var i = 0, y = arr.length; i < y; ) {
    while (i < arr.length && !vowels.includes(arr[i])) {
      i++;
    }

    while (y >= 0 && !vowels.includes(arr[y])) {
      y--;
    }

    if (i < y) {
      var temp = arr[i];
      arr[i] = arr[y];
      arr[y] = temp;
      i++;
      y--;
    }
  }
  return arr.join("");
};

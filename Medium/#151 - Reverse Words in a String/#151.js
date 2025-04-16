/**
 * @param {string} s
 * @return {string}
 */

/**
 * This function takes a string `s` as input and reverses the order of the words in it.
 *
 * 1. The string is first trimmed of leading and trailing whitespace using `trim()`.
 * 2. The string is then split into an array of words using `split(/\s+/)`, which splits on one or more spaces.
 * 3. Two pointers, `left` and `right`, are initialized at the start and end of the array of words, respectively.
 * 4. A while loop is used to swap the words at the `left` and `right` pointers until they meet in the middle.
 * 5. The array of words is then joined back into a single string with spaces separating the words.
 *
 * The function returns the string with the words in reversed order.
 */

/* CAN USE STACK TO REVERSE ALSO */

var reverseWords = function (s) {
  var wordArrays = s.trim().split(/\s+/);
  var left = 0;
  var right = wordArrays.length - 1;
  while (left < right) {
    [wordArrays[left], wordArrays[right]] = [
      wordArrays[right],
      wordArrays[left],
    ];
    left++;
    right--;
  }

  return wordArrays.join(" ");
};

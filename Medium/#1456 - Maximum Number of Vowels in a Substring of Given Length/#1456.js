/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

/**
 * Finds the maximum number of vowels in any substring of length k in the string s.
 *
 * Approach:
 * 1. Initialize a set of vowels.
 * 2. Count the number of vowels in the first window of size k.
 * 3. Slide the window through the string:
 *    - Subtract 1 if the character going out is a vowel.
 *    - Add 1 if the character coming in is a vowel.
 *    - Track the maximum number of vowels seen in any window.
 * 4. Return the maximum count.
 *
 * Time Complexity: O(n), where n is the length of the string s.
 * Space Complexity: O(1), since the vowel array is constant in size.
 */

var maxVowels = function (s, k) {
  const vowels = ["a", "e", "i", "o", "u"];

  var count = 0;
  for (var i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
      count++;
    }
  }

  var maxCount = count;

  for (var i = k; i < s.length; i++) {
    if (vowels.includes(s[i - k])) count--;
    if (vowels.includes(s[i])) {
      count++;
    }
    maxCount = Math.max(count, maxCount);
  }
  return maxCount;
};

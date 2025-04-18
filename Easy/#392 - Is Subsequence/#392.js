/**
 * Checks if string `s` is a subsequence of string `t`.
 *
 * A subsequence means all characters of `s` appear in `t` in the same order,
 * but not necessarily consecutively. This approach uses a single pointer, `checkIndex`,
 * to track the current character in `s` that we're trying to match.
 *
 * We iterate through `t`, and each time we find a character that matches `s[checkIndex]`,
 * we move the pointer forward. If `checkIndex` reaches the end of `s`, it means all characters
 * have been found in order, and we return true.
 *
 * The function returns early if `s` is longer than `t` (impossible to be a subsequence),
 * or if `s` is empty (empty string is a subsequence of any string).
 *
 * Time complexity: O(n), where n is the length of `t`
 * Space complexity: O(1)
 *
 * @param {string} s - The subsequence string to check
 * @param {string} t - The target string
 * @return {boolean} - Returns true if `s` is a subsequence of `t`, otherwise false
 */

var isSubsequence = function (s, t) {
  var checkIndex = 0;

  if (s.length > t.length) return false;
  if (s.length === 0) return true;

  for (var i = 0; i < t.length; i++) {
    if (t[i] === s[checkIndex]) {
      checkIndex++;
      if (checkIndex === s.length) return true;
    }
  }

  return false;
};

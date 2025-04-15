/**
 * This function calculates the greatest common divisor (GCD) of two strings.
 * The idea behind the solution is that if two strings `str1` and `str2` share
 * a common divisor, they should be able to form each other by repeating a
 * certain substring. Here's the breakdown of the logic:
 *
 * 1. First, the function checks if `str1 + str2` is equal to `str2 + str1`.
 *    If they are not equal, it means the strings don't share any common divisor,
 *    so the function immediately returns an empty string.
 *
 * 2. Then, it calculates the GCD of the lengths of `str1` and `str2` using the
 *    `getGCD` helper function. This GCD represents the potential length of the
 *    common divisor string that could form both strings.
 *
 * 3. The function then iterates up to the length of the GCD, comparing characters
 *    from both strings one by one. If the characters at the same index in both
 *    strings match, they are appended to the `result` string.
 *
 * 4. If a mismatch is found, the loop breaks, and the function returns the `result`
 *    string, which will be the largest possible common divisor string.
 *
 * 5. If no common divisor string is found, it returns an empty string.
 *
 * @param {string} str1 - The first string to compare.
 * @param {string} str2 - The second string to compare.
 * @return {string} - The greatest common divisor string of str1 and str2, or an empty string.
 */
var gcdOfStrings = function (str1, str2) {
  var result = "";
  const lengthGCD = getGCD(str1.length, str2.length);

  if (str1 + str2 != str2 + str1) return result;

  for (var i = 0; i < lengthGCD; i++) {
    if (str1[i] === str2[i]) result += str1[i];
    else break;
  }
  return result;
};

function getGCD(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

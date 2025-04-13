# Palindrome Number
from typing import List


class Solution:
    def isPalindrome(self, x: int) -> bool:
        digitCount = 0
        if x < 0:
            return False

        if x == 0:
            digitCount = 1

        while x != 0:
            x = x // 10

# Palindrome Number
from typing import List


class Solution:
    def isPalindrome(self, x: int) -> bool:
        digitCount = 1
        if x < 0:
            return False

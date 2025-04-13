# Two Sums

from typing import List


# Solution 1: Brute force
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        i = 0
        for i in range(0, len(nums)):
            for y in range(i+1, len(nums)):
                if nums[i] + nums[y] == target:
                    return [i, y]
        return []

# Solution 2: Dictionary aka object


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dictionary = {}
        for i, num in enumerate(nums):

from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        i = 0
        for i in range(0, len(nums)):
            for y in range(i, len(nums)):
                if nums[i] + nums[y] == target:
                    return [i, y]
        return []

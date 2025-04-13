from typing import List


class Solution:
    def applyOperations(self, nums: List[int]) -> List[int]:
        i = 0
        for i in range(len(nums)):
            if nums[i] == nums[i+1]:
                nums[i] *= 2
                nums[i+1] = 0
            else:
                continue

        return nums

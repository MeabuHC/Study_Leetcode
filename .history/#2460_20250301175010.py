from typing import List


class Solution:
    def applyOperations(self, nums: List[int]) -> List[int]:
        i = 0
        for i in range(len(nums) - 1):
            if nums[i] == nums[i+1] or nums[i] == 0:
                nums[i] *= 2
                nums.pop(nums[i+1])
                nums.append(0)
            else:
                continue

        return nums

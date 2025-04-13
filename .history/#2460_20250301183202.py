from typing import List


class Solution:
    def applyOperations(self, nums: List[int]) -> List[int]:
        i = 0
        n = len(nums)
        newList = []
        for i in range(n - 1):
            if nums[i] == nums[i+1]:
                nums[i] *= 2
                nums[i+1] = 0
            else:
                continue

        for i in range(n):
            if (nums[i] != 0):
                newList.append(nums[i])

        for i in range(len(newList) - 1):
            newList.append(0)

        return newList

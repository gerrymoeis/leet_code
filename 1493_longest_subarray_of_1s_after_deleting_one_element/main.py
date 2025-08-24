from typing import List

class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        prev, curr, res = 0, 0, 0
        hasZero = False
        for num in nums:
            if num:
                curr += 1
            else:
                prev = curr
                curr = 0
                hasZero = True
            res = max(res, prev+curr)
        if hasZero: return res
        return len(nums)-1
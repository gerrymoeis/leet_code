from typing import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        setNums = set()
        for num in nums:
            if num in setNums:
                return True
            setNums.add(num)
        return False
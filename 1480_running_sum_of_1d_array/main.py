from typing import List

class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        num = nums[0]
        for i in range(1, len(nums)):
          num += nums[i]
          nums[i] = num
        return nums

tests = [[1,2,3,4], [1,1,1,1,1], [3,1,2,10,1]]
for test in tests:
  t = Solution()
  print(t.runningSum(test))

# Attempt 2 - Success
# class Solution:
#     def runningSum(self, nums: List[int]) -> List[int]:
#       return [sum(nums[:i+1]) for i in range(len(nums))]
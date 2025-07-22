class Solution:
    def numberOfSteps(self, num: int) -> int:
        steps = 0
        while num > 0:
          if num % 2:
            num -= 1
          else:
            num //= 2
          steps += 1
        return steps

tests = [14,8,123,0,1,34901,24231,433,9432,8198351]
for num in tests:
  test = Solution()
  print(test.numberOfSteps(num))
class Solution(object):
    def sum(self, num1, num2):
        """
        :type num1: int
        :type num2: int
        :rtype: int
        """
        return num1 + num2


tests = [[12,5], [-10,4], [83983940234,2184783249890324], [-9489283,-29479283]]
for test in tests:
  s = Solution()
  print(s.sum(test[0], test[1]))
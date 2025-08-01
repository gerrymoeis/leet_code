from typing import List

class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        nums = [[1]]
        for i in range(1, numRows):
            rows = [1]
            for j in range(i-1):
                rows.append(nums[i-1][j] + nums[i-1][j+1])
            rows.append(1)
            nums.append(rows)
        return nums
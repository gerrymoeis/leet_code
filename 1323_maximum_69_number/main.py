import math

class Solution:
    def maximum69Number (self, num: int) -> int:
        digits = math.floor(math.log10(num))
        n = num
        for i in range(digits, -1, -1):
            d = n // 10**i
            if d == 6:
                num += 3 * 10**i
                break
            n -= d * 10**i
        return num
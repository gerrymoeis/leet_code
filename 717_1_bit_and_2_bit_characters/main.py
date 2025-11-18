from typing import List

class Solution:
    def isOneBitCharacter(self, bits: List[int]) -> bool:
        count = 0
        i = len(bits) - 2
        while (bits[i]):
            count += 1
            i -= 1
        return not (count % 2)
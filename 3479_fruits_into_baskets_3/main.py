from typing import List
import math

class Solution:
    def numOfUnplacedFruits(self, fruits: List[int], baskets: List[int]) -> int:
        n = len(baskets)
        blockSize = math.floor(math.sqrt(n))
        blocks = []

        for i in range(0, n, blockSize):
            end = min(i + blockSize, n)
            maxInBlock = -1
            for j in range(i, end):
                if baskets[j] > maxInBlock:
                    maxInBlock = baskets[j]
            blocks.append(maxInBlock)
        
        count = 0
        for fruit in fruits:
            basketFound = False
            for i in range(len(blocks)):
                if (blocks[i] >= fruit):
                    start = i * blockSize
                    end = min(start + blockSize, n)

                    for j in range(start, end):
                        if baskets[j] >= fruit:
                            baskets[j] = -1
                            basketFound = True

                            newMax = -1
                            for k in range(start, end):
                                if (baskets[k] > newMax):
                                    newMax = baskets[k]
                            blocks[i] = newMax
                            break
                if basketFound:
                    break
            if not basketFound:
                count += 1
        return count
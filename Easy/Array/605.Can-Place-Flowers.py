"""
605. Can Place Flowers
Easy


You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 

Constraints:

1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length

Topics
Array
Greedy
"""
from typing import List


class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        count = 0
        for i in range(len(flowerbed)):
            if flowerbed[i] == 0:
                # Check the previous and next plots
                prev_empty = (i == 0) or (flowerbed[i - 1] == 0)
                next_empty = (i == len(flowerbed) -
                              1) or (flowerbed[i + 1] == 0)

                if prev_empty and next_empty:
                    flowerbed[i] = 1  # Plant a flower
                    count += 1
                    if count >= n:
                        return True

        return count >= n


# Example usage
solution = Solution()
print(solution.canPlaceFlowers([1, 0, 0, 0, 1], 1))  # Output: True
print(solution.canPlaceFlowers([1, 0, 0, 0, 1], 2))  # Output: False
print(solution.canPlaceFlowers([0, 0, 1, 0, 0], 1))  # Output: True

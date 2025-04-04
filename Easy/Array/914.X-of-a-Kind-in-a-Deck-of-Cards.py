"""
914. X of a Kind in a Deck of Cards

You are given an integer array deck where deck[i] represents the number written on the ith card.

Partition the cards into one or more groups such that:

Each group has exactly x cards where x > 1, and
All the cards in one group have the same integer written on them.
Return true if such partition is possible, or false otherwise.

 

Example 1:

Input: deck = [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
Example 2:

Input: deck = [1,1,1,2,2,2,3,3]
Output: false
Explanation: No possible partition.
 

Constraints:

1 <= deck.length <= 104
0 <= deck[i] < 104

Topics
Array
Hash Table
Math
Counting
Number Theory
"""

from typing import List
from collections import Counter
from math import gcd
from functools import reduce


class Solution:
    def hasGroupsSizeX(self, deck: List[int]) -> bool:
        # Count the frequency of each card
        count = Counter(deck).values()
        # Compute the GCD of all frequencies
        return reduce(gcd, count) >= 2


# Example usage
solution = Solution()
print(solution.hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]))  # Output: True
print(solution.hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]))  # Output: False
print(solution.hasGroupsSizeX([1]))                      # Output: False
print(solution.hasGroupsSizeX([1, 1, 2, 2, 2, 2]))       # Output: True

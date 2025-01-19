"""
598. Range Addition II
Easy

You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

Count and return the number of maximum integers in the matrix after performing all the operations.

 

Example 1:


Input: m = 3, n = 3, ops = [[2,2],[3,3]]
Output: 4
Explanation: The maximum integer in M is 2, and there are four of it in M. So return 4.
Example 2:

Input: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
Output: 4
Example 3:

Input: m = 3, n = 3, ops = []
Output: 9
 

Constraints:

1 <= m, n <= 4 * 104
0 <= ops.length <= 104
ops[i].length == 2
1 <= ai <= m
1 <= bi <= n

Topics
Array
Math
"""

from typing import List


class Solution:
    def maxCount(self, m: int, n: int, ops: List[List[int]]) -> int:
        if not ops:  # No operations, return full matrix size
            return m * n

        # Find minimum dimensions
        min_a = min(op[0] for op in ops)
        min_b = min(op[1] for op in ops)

        # Return the area of the submatrix
        return min_a * min_b


# Example usage
solution = Solution()
print(solution.maxCount(3, 3, [[2, 2], [3, 3]]))  # Output: 4
print(solution.maxCount(3, 3, []))               # Output: 9
print(solution.maxCount(4, 5, [[3, 3], [4, 2]]))  # Output: 6

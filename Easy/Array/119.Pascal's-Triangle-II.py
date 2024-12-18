"""

119. Pascal's Triangle II

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
 

Constraints:

0 <= rowIndex <= 33
 

Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?

Topics
Array
Dynamic Programming

"""
from typing import List


class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        # Start with the first row
        row = [1]

        # Build up to the desired row
        for i in range(rowIndex):
            # Update row from right to left
            row.append(1)  # Add 1 at the end for the new row
            for j in range(len(row) - 2, 0, -1):  # Update intermediate values
                row[j] += row[j - 1]

        return row

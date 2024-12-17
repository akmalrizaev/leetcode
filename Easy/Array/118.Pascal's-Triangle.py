"""

118. Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

     1
    1 1
   1 2 1
  1 3 3 1
 1 4 6 4 1

 Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 

Constraints:

1 <= numRows <= 30

Topics
Array
Dynamic Programming

"""
from typing import List


class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        # Initialize an empty list to store the triangle
        triangle = []

        # Iterate through each row
        for i in range(numRows):
            # Start each row with 1
            row = [1]

            # Calculate intermediate values if the row length > 1
            if i > 0:
                prev_row = triangle[-1]  # Get the previous row
                for j in range(1, i):  # Compute the sums of adjacent values
                    row.append(prev_row[j-1] + prev_row[j])
                row.append(1)  # End the row with 1

            # Append the current row to the triangle
            triangle.append(row)

        return triangle

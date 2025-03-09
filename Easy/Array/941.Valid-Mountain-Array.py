"""
941. Valid Mountain Array

Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

 

Example 1:

Input: arr = [2,1]
Output: false
Example 2:

Input: arr = [3,5,5]
Output: false
Example 3:

Input: arr = [0,3,2,1]
Output: true
 

Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 104

Topics
Array
"""

from typing import List


class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
        n = len(arr)
        if n < 3:
            return False

        i, j = 0, n - 1

        # Move i up the mountain
        while i + 1 < n and arr[i] < arr[i + 1]:
            i += 1

        # Move j down the mountain
        while j > 0 and arr[j] < arr[j - 1]:
            j -= 1

        # i and j should meet at the same peak, not at the edges
        return i > 0 and j < n - 1 and i == j


# Example usage
solution = Solution()
print(solution.validMountainArray([2, 1]))                  # Output: False
print(solution.validMountainArray([3, 5, 5]))              # Output: False
print(solution.validMountainArray([0, 3, 2, 1]))           # Output: True
print(solution.validMountainArray([1, 2, 3, 4, 5, 3, 2]))  # Output: True

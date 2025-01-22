"""
628. Maximum Product of Three Numbers
Easy

Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

 

Example 1:

Input: nums = [1,2,3]
Output: 6
Example 2:

Input: nums = [1,2,3,4]
Output: 24
Example 3:

Input: nums = [-1,-2,-3]
Output: -6
 

Constraints:

3 <= nums.length <= 104
-1000 <= nums[i] <= 1000

Topics
Array
Math
Sorting
"""

from typing import List


class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        nums.sort()  # Sort the array
        # Compute the two possible maximum products
        return max(nums[-1] * nums[-2] * nums[-3], nums[0] * nums[1] * nums[-1])


# Example usage
solution = Solution()
print(solution.maximumProduct([1, 2, 3]))            # Output: 6
print(solution.maximumProduct([1, 2, 3, 4]))         # Output: 24
print(solution.maximumProduct([-1, -2, -3]))         # Output: -6
print(solution.maximumProduct([-10, -10, 5, 2]))     # Output: 500

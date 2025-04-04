"""
896. Monotonic Array

An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

 

Example 1:

Input: nums = [1,2,2,3]
Output: true
Example 2:

Input: nums = [6,5,4,4]
Output: true
Example 3:

Input: nums = [1,3,2]
Output: false
 

Constraints:

1 <= nums.length <= 105
-105 <= nums[i] <= 105

Topics
Array
"""

from typing import List


class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        increasing = all(nums[i] <= nums[i + 1] for i in range(len(nums) - 1))
        decreasing = all(nums[i] >= nums[i + 1] for i in range(len(nums) - 1))
        return increasing or decreasing


# Example usage
solution = Solution()
# Output: True (Monotonically increasing)
print(solution.isMonotonic([1, 2, 2, 3]))
# Output: True (Monotonically decreasing)
print(solution.isMonotonic([6, 5, 4, 4]))
print(solution.isMonotonic([1, 3, 2]))     # Output: False (Not monotonic)
print(solution.isMonotonic([1, 2, 4, 5]))  # Output: True
# Output: True (Constant array is monotonic)
print(solution.isMonotonic([1, 1, 1]))

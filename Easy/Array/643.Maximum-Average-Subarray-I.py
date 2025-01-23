"""
643. Maximum Average Subarray I
Easy


You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000
 

Constraints:

n == nums.length
1 <= k <= n <= 105
-104 <= nums[i] <= 104

Topics
Array
Sliding Window
"""

from typing import List


class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        # Compute the sum of the first k elements
        window_sum = sum(nums[:k])
        max_sum = window_sum

        # Slide the window through the array
        for i in range(k, len(nums)):
            window_sum += nums[i] - nums[i - k]
            max_sum = max(max_sum, window_sum)

        # Return the maximum average
        return max_sum / k


# Example usage
solution = Solution()
print(solution.findMaxAverage([1, 12, -5, -6, 50, 3], 4))  # Output: 12.75
print(solution.findMaxAverage([5], 1))                     # Output: 5.0
print(solution.findMaxAverage([4, 2, 1, 3, 3], 2))         # Output: 3.0

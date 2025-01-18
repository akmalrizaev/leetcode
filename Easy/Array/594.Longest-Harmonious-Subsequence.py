"""
594. Longest Harmonious Subsequence
Easy

We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

 

Example 1:

Input: nums = [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].
Example 2:

Input: nums = [1,2,3,4]
Output: 2
Example 3:

Input: nums = [1,1,1,1]
Output: 0
 

Constraints:

1 <= nums.length <= 2 * 104
-109 <= nums[i] <= 109

Topics
Array
Hash Table
Sliding Window
Sorting
Counting
"""

from typing import List
from collections import Counter


class Solution:
    def findLHS(self, nums: List[int]) -> int:
        freq = Counter(nums)  # Count frequency of each number
        max_length = 0

        for num in freq:
            if num + 1 in freq:  # Check if harmonious pair exists
                max_length = max(max_length, freq[num] + freq[num + 1])

        return max_length


# Example usage
solution = Solution()
print(solution.findLHS([1, 3, 2, 2, 5, 2, 3, 7]))  # Output: 5
print(solution.findLHS([1, 2, 3, 4]))             # Output: 2
print(solution.findLHS([1, 1, 1, 1]))             # Output: 0

"""

169. Majority Element


  Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 

Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109

Topics
Array
Hash Table
Divide and Conquer
Sorting
Counting

"""
from typing import List


class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        # Step 1: Find the candidate
        candidate, count = None, 0
        for num in nums:
            if count == 0:
                candidate = num
            count += (1 if num == candidate else -1)

        # Step 2: Return the candidate
        return candidate

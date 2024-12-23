"""

219. Contains Duplicate II


  Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false

 

Constraints:

    1 <= nums.length <= 105
    -109 <= nums[i] <= 109
    0 <= k <= 105

Topics
Array
Hash Table
Sliding Window

"""
from typing import List


class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        index_map = {}  # Dictionary to store the latest index of each number

        for i, num in enumerate(nums):
            if num in index_map and i - index_map[num] <= k:
                return True  # Found a pair satisfying the conditions
            index_map[num] = i  # Update the latest index of the current number

        return False  # No such pair found

"""

283. Move Zeroes

   Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]

 

Constraints:

    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1

 
Follow up: Could you minimize the total number of operations done?

Topics
Array
Two Pointers

"""

from typing import List


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        slow = 0  # Position to place the next non-zero element

        for fast in range(len(nums)):
            if nums[fast] != 0:  # If the current element is non-zero
                nums[slow], nums[fast] = nums[fast], nums[slow]  # Swap
                slow += 1  # Move the slow pointer

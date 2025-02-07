"""
747. Largest Number At Least Twice of Others


You are given an integer array nums where the largest integer is unique.

Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

 

Example 1:

Input: nums = [3,6,1,0]
Output: 1
Explanation: 6 is the largest integer.
For every other number in the array x, 6 is at least twice as big as x.
The index of value 6 is 1, so we return 1.
Example 2:

Input: nums = [1,2,3,4]
Output: -1
Explanation: 4 is less than twice the value of 3, so we return -1.
 

Constraints:

2 <= nums.length <= 50
0 <= nums[i] <= 100
The largest element in nums is unique.

Topics
Array
Sorting
"""

from typing import List


class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 0

        largest = second_largest = -1
        index_of_largest = -1

        for i, num in enumerate(nums):
            if num > largest:
                second_largest = largest
                largest = num
                index_of_largest = i
            elif num > second_largest:
                second_largest = num

        if largest >= 2 * second_largest:
            return index_of_largest
        return -1


# Example usage
solution = Solution()
print(solution.dominantIndex([3, 6, 1, 0]))  # Output: 1
print(solution.dominantIndex([1, 2, 3, 4]))  # Output: -1
print(solution.dominantIndex([1]))           # Output: 0

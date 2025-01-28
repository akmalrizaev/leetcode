"""
697. Degree of an Array

Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

Example 1:

Input: nums = [1,2,2,3,1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:

Input: nums = [1,2,2,3,1,4,2]
Output: 6
Explanation: 
The degree is 3 because the element 2 is repeated 3 times.
So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 

Constraints:

nums.length will be between 1 and 50,000.
nums[i] will be an integer between 0 and 49,999.

Topics
Array
Hash Table
"""

from typing import List


class Solution:
    def findShortestSubarray(self, nums: List[int]) -> int:
        frequency = {}
        first_occurrence = {}
        last_occurrence = {}

        for i, num in enumerate(nums):
            frequency[num] = frequency.get(num, 0) + 1
            if num not in first_occurrence:
                first_occurrence[num] = i
            last_occurrence[num] = i

        degree = max(frequency.values())
        min_length = float('inf')

        for num in frequency:
            if frequency[num] == degree:
                length = last_occurrence[num] - first_occurrence[num] + 1
                min_length = min(min_length, length)

        return min_length


# Example usage
solution = Solution()
print(solution.findShortestSubarray([1, 2, 2, 3, 1]))  # Output: 2
print(solution.findShortestSubarray([1, 2, 2, 3, 1, 4, 2]))  # Output: 6
print(solution.findShortestSubarray([1]))  # Output: 1

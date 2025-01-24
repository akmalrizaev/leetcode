"""
645. Set Mismatch
Easy

You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

Example 1:

Input: nums = [1,2,2,4]
Output: [2,3]
Example 2:

Input: nums = [1,1]
Output: [1,2]
 

Constraints:

2 <= nums.length <= 104
1 <= nums[i] <= 104

Topics
Array
Hash Table
Bit Manipulation
Sorting
"""

from typing import List


class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        n = len(nums)
        count = [0] * (n + 1)

        # Count frequency of each number
        for num in nums:
            count[num] += 1

        duplicate = missing = -1
        for i in range(1, n + 1):
            if count[i] == 2:
                duplicate = i
            elif count[i] == 0:
                missing = i

        return [duplicate, missing]


# Example usage
solution = Solution()
print(solution.findErrorNums([1, 2, 2, 4]))  # Output: [2, 3]
print(solution.findErrorNums([1, 1]))        # Output: [1, 2]
print(solution.findErrorNums([3, 2, 3]))     # Output: [3, 1]

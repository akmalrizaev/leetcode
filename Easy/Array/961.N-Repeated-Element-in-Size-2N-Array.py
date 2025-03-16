""""
961. N-Repeated Element in Size 2N Array

You are given an integer array nums with the following properties:

nums.length == 2 * n.
nums contains n + 1 unique elements.
Exactly one element of nums is repeated n times.
Return the element that is repeated n times.

 

Example 1:

Input: nums = [1,2,3,3]
Output: 3
Example 2:

Input: nums = [2,1,2,5,3,2]
Output: 2
Example 3:

Input: nums = [5,1,5,2,5,3,5,4]
Output: 5
 

Constraints:

2 <= n <= 5000
nums.length == 2 * n
0 <= nums[i] <= 104
nums contains n + 1 unique elements and one of them is repeated exactly n times.

Topics
Array
Hash Table"
"""

from typing import List


class Solution:
    def repeatedNTimes(self, nums: List[int]) -> int:
        seen = set()
        for num in nums:
            if num in seen:
                return num
            seen.add(num)


# Example usage
solution = Solution()
print(solution.repeatedNTimes([1, 2, 3, 3]))  # Output: 3
print(solution.repeatedNTimes([2, 1, 2, 5, 3, 2]))  # Output: 2
print(solution.repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]))  # Output: 5

"""
922. Sort Array By Parity II

Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

Return any answer array that satisfies this condition.

 

Example 1:

Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
Example 2:

Input: nums = [2,3]
Output: [2,3]
 

Constraints:

2 <= nums.length <= 2 * 104
nums.length is even.
Half of the integers in nums are even.
0 <= nums[i] <= 1000

Topics
Array
Two Pointers
Sorting
"""

from typing import List


class Solution:
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        even, odd = 0, 1
        n = len(nums)

        while even < n and odd < n:
            if nums[even] % 2 == 0:
                even += 2
            elif nums[odd] % 2 == 1:
                odd += 2
            else:
                nums[even], nums[odd] = nums[odd], nums[even]

        return nums


# Example usage
solution = Solution()
# Output: [4, 5, 2, 7] or other valid arrangements
print(solution.sortArrayByParityII([4, 2, 5, 7]))
print(solution.sortArrayByParityII([2, 3]))        # Output: [2, 3]

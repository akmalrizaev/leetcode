"""
989. Add to Array-Form of Integer

The array-form of an integer num is an array representing its digits in left to right order.

For example, for num = 1321, the array form is [1,3,2,1].
Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

 

Example 1:

Input: num = [1,2,0,0], k = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234
Example 2:

Input: num = [2,7,4], k = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455
Example 3:

Input: num = [2,1,5], k = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021
 

Constraints:

1 <= num.length <= 104
0 <= num[i] <= 9
num does not contain any leading zeros except for the zero itself.
1 <= k <= 104

Topics
Array
Math

"""

from typing import List


class Solution:
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
        carry = 0
        result = []
        n = len(num)

        # Start adding from the least significant digit
        for i in range(n - 1, -1, -1):
            k_digit = k % 10
            k //= 10

            total = num[i] + k_digit + carry
            carry = total // 10
            result.append(total % 10)

        # Add remaining digits of k
        while k > 0:
            k_digit = k % 10
            k //= 10

            total = k_digit + carry
            carry = total // 10
            result.append(total % 10)

        # Handle remaining carry
        if carry > 0:
            result.append(carry)

        # Reverse the result since we added digits in reverse order
        return result[::-1]


# Example usage
solution = Solution()
print(solution.addToArrayForm([1, 2, 0, 0], 34))  # Output: [1, 2, 3, 4]
print(solution.addToArrayForm([2, 7, 4], 181))    # Output: [4, 5, 5]
print(solution.addToArrayForm([2, 1, 5], 806))    # Output: [1, 0, 2, 1]
print(solution.addToArrayForm([0], 10000))        # Output: [1, 0, 0, 0, 0]

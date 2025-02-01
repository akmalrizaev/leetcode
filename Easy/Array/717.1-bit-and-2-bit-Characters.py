"""
717. 1-bit and 2-bit Characters

We have two special characters:

The first character can be represented by one bit 0.
The second character can be represented by two bits (10 or 11).
Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.

 

Example 1:

Input: bits = [1,0,0]
Output: true
Explanation: The only way to decode it is two-bit character and one-bit character.
So the last character is one-bit character.
Example 2:

Input: bits = [1,1,1,0]
Output: false
Explanation: The only way to decode it is two-bit character and two-bit character.
So the last character is not one-bit character.
 

Constraints:

1 <= bits.length <= 1000
bits[i] is either 0 or 1.

Topics
Array
"""

from typing import List


class Solution:
    def isOneBitCharacter(self, bits: List[int]) -> bool:
        n = len(bits)
        i = 0

        while i < n - 1:
            if bits[i] == 1:
                i += 2  # Skip the next bit as it's part of a 2-bit character
            else:
                i += 1  # Move to the next bit for a 1-bit character

        return i == n - 1  # Check if the pointer lands on the last bit


# Example usage
solution = Solution()
print(solution.isOneBitCharacter([1, 0, 0]))  # Output: True
print(solution.isOneBitCharacter([1, 1, 1, 0]))  # Output: False
print(solution.isOneBitCharacter([0]))  # Output: True

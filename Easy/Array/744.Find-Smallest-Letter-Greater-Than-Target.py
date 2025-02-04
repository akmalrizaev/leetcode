"""
744. Find Smallest Letter Greater Than Target

You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

 

Example 1:

Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
Example 2:

Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
Example 3:

Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
 

Constraints:

2 <= letters.length <= 104
letters[i] is a lowercase English letter.
letters is sorted in non-decreasing order.
letters contains at least two different characters.
target is a lowercase English letter.

Topics
Array
Binary Search
"""

from typing import List


class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        low, high = 0, len(letters) - 1

        while low <= high:
            mid = (low + high) // 2
            if letters[mid] > target:
                high = mid - 1
            else:
                low = mid + 1

        # If no letter greater than target is found, wrap around
        return letters[low % len(letters)]


# Example usage
solution = Solution()
print(solution.nextGreatestLetter(["c", "f", "j"], "a"))  # Output: "c"
print(solution.nextGreatestLetter(["c", "f", "j"], "c"))  # Output: "f"
print(solution.nextGreatestLetter(["c", "f", "j"], "j"))  # Output: "c"

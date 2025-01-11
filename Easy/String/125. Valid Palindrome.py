"""
125. Valid Palindrome
Easy

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

Topics
Two Pointers
String
"""


class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Step 1: Initialize two pointers
        left, right = 0, len(s) - 1

        # Step 2: Traverse the string from both ends
        while left < right:

            # Skip non-alphanumeric characters on the left
            while left < right and not s[left].isalnum():
                left += 1

            # Skip non-alphanumeric characters on the right
            while left < right and not s[right].isalnum():
                right -= 1

            # Compare characters
            if s[left].lower() != s[right].lower():
                return False

            # Move both pointers inward
            left += 1
            right -= 1

        return True


# Example usage
solution = Solution()
print(solution.isPalindrome("A man, a plan, a canal: Panama"))  # Output: true
print(solution.isPalindrome("race a car"))                     # Output: false

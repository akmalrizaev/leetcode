# 392. Is Subsequence
# Easy

"""
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. 
In this scenario, how would you change your code?

Topics
Two Pointers
String
Dynamic Programming

"""


class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        i, j = 0, 0  # Pointers for s and t

        while i < len(s) and j < len(t):
            if s[i] == t[j]:
                i += 1  # Move pointer in s if characters match
            j += 1  # Always move pointer in t

        return i == len(s)  # Check if all characters in s were matched


# Example usage
solution = Solution()
print(solution.isSubsequence("abc", "ahbgdc"))  # Output: true
print(solution.isSubsequence("axc", "ahbgdc"))  # Output: false

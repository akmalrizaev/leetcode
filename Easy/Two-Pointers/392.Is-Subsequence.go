/*

 392. Is Subsequence
Easy


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

Time & Space Complexity:
Time Complexity: O(n + m)

n = length of s, m = length of t

Single pass through both strings.

Space Complexity: O(1)

No extra memory used.

*/

package main

func isSubsequence(s string, t string) bool {
	i, j := 0, 0

	for i < len(s) && j < len(t) {
		if s[i] == t[j] {
			i++ // Move both pointers if characters match
		}
		j++ // Always move pointer for t
	}

	return i == len(s) // Check if we went through all characters in s
}

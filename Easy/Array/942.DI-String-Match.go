/*

942. DI String Match

A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

s[i] == 'I' if perm[i] < perm[i + 1], and
s[i] == 'D' if perm[i] > perm[i + 1].
Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.



Example 1:

Input: s = "IDID"
Output: [0,4,1,3,2]
Example 2:

Input: s = "III"
Output: [0,1,2,3]
Example 3:

Input: s = "DDI"
Output: [3,2,0,1]


Constraints:

1 <= s.length <= 105
s[i] is either 'I' or 'D'.

Topics
Array
Two Pointers
String
Greedy

*/

package main

func diStringMatch(s string) []int {
	n := len(s)
	res := make([]int, n+1)

	low, high := 0, n
	for i := 0; i < n; i++ {
		if s[i] == 'I' {
			res[i] = low
			low++
		} else { // 'D'
			res[i] = high
			high--
		}
	}
	// last one will be equal (low == high)
	res[n] = low
	return res
}

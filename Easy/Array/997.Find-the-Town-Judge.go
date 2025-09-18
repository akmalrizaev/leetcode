/*

997. Find the Town Judge

In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.

Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.



Example 1:

Input: n = 2, trust = [[1,2]]
Output: 2
Example 2:

Input: n = 3, trust = [[1,3],[2,3]]
Output: 3
Example 3:

Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1


Constraints:

1 <= n <= 1000
0 <= trust.length <= 104
trust[i].length == 2
All the pairs of trust are unique.
ai != bi
1 <= ai, bi <= n

Topics
Array
Hash Table
Graph

⏱ Time Complexity: O(n + m), where m = len(trust)
📦 Space Complexity: O(n)

*/

package main

func findJudge(n int, trust [][]int) int {
	// indegree[i] = how many people trust i
	// outdegree[i] = how many people i trusts
	indegree := make([]int, n+1)
	outdegree := make([]int, n+1)

	for _, t := range trust {
		a, b := t[0], t[1]
		outdegree[a]++
		indegree[b]++
	}

	for i := 1; i <= n; i++ {
		// Judge trusts nobody → outdegree[i] == 0
		// Everyone else trusts Judge → indegree[i] == n-1
		if outdegree[i] == 0 && indegree[i] == n-1 {
			return i
		}
	}
	return -1
}

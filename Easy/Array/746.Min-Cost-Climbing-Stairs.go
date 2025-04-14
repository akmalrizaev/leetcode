/*

746. Min Cost Climbing Stairs

You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.



Example 1:

Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.
Example 2:

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.


Constraints:

2 <= cost.length <= 1000
0 <= cost[i] <= 999

Time & Space Complexity:

Time Complexity: O(n) — Single loop through the cost array.

Space Complexity: O(1) — Only two variables are used.

Topics
Array
Dynamic Programming

*/

package main

func minCostClimbingStairs(cost []int) int {
	n := len(cost)
	prev2, prev1 := cost[0], cost[1] // Base cases

	for i := 2; i < n; i++ {
		current := cost[i] + min(prev1, prev2)
		prev2, prev1 = prev1, current
	}

	return min(prev1, prev2)
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

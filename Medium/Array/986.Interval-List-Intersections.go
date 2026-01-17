/*

986. Interval List Intersections

You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.

A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.

The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].

Examples:
Example 1:
Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

Example 2:
Input: firstList = [[1,3],[5,9]], secondList = []
Output: []

Example 3:
Input: firstList = [], secondList = [[4,8],[10,12]]
Output: []

Example 4:
Input: firstList = [[1,7]], secondList = [[3,10]]
Output: [[3,7]]

Constraints:
0 <= firstList.length, secondList.length <= 1000
firstList[i].length == 2
secondList[j].length == 2
0 <= firstList[i][0] <= firstList[i][1] <= 10^9
0 <= secondList[j][0] <= secondList[j][1] <= 10^9
The intervals in firstList and secondList are disjoint and sorted in increasing order.
Approach:
Use two pointers to iterate through both interval lists.
Check if the intervals intersect.
Two intervals [a1, b1] and [a2, b2] intersect if a1 <= b2 and a2 <= b1.
If they intersect, calculate the intersection interval as [max(a1, a2), min(b1, b2)].
Move the pointer of the list where the interval ends earlier since it cannot intersect further.

Topics
Array
Two Pointers


⏱️ Complexity
Type	Complexity
Time	O(n + m)
Space	O(1) (output excluded)

*/

package main

func intervalIntersection(firstList [][]int, secondList [][]int) [][]int {
	i, j := 0, 0
	var res [][]int

	for i < len(firstList) && j < len(secondList) {
		start := max(firstList[i][0], secondList[j][0])
		end := min(firstList[i][1], secondList[j][1])

		if start <= end {
			res = append(res, []int{start, end})
		}

		// Move pointer with smaller end
		if firstList[i][1] < secondList[j][1] {
			i++
		} else {
			j++
		}
	}

	return res
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

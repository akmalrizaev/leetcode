/*

40. Combination Sum II

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.



Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output:
[
[1,2,2],
[5]
]


Constraints:

1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30

Topics
Array
Backtracking

*/

package main

import (
	"sort"
)

func combinationSum2(candidates []int, target int) [][]int {
	sort.Ints(candidates) // Important to skip duplicates

	var res [][]int
	var comb []int

	var backtrack func(start int, remaining int)
	backtrack = func(start int, remaining int) {
		if remaining == 0 {
			temp := make([]int, len(comb))
			copy(temp, comb)
			res = append(res, temp)
			return
		}

		for i := start; i < len(candidates); i++ {
			// Skip duplicates at same depth
			if i > start && candidates[i] == candidates[i-1] {
				continue
			}

			if candidates[i] > remaining {
				break
			}

			comb = append(comb, candidates[i])
			backtrack(i+1, remaining-candidates[i]) // can't reuse elements
			comb = comb[:len(comb)-1]
		}
	}

	backtrack(0, target)
	return res
}

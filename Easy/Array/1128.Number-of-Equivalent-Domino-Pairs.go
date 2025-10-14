/*

1128. Number of Equivalent Domino Pairs

Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].



Example 1:

Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1
Example 2:

Input: dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
Output: 3


Constraints:

1 <= dominoes.length <= 4 * 104
dominoes[i].length == 2
1 <= dominoes[i][j] <= 9

Topics
Array
Hash Table
Counting

⏱ Complexity

Time: O(n)

Space: O(1) (since domino values are between 1–9, only 100 possible keys)

*/

package main

import "fmt"

func numEquivDominoPairs(dominoes [][]int) int {
	count := make(map[int]int)
	result := 0

	for _, d := range dominoes {
		// Normalize the domino (smaller number first)
		a, b := d[0], d[1]
		if a > b {
			a, b = b, a
		}
		// Create a unique key
		key := a*10 + b

		// Each time we see this key again, it forms pairs with all previous ones
		result += count[key]
		count[key]++
	}

	return result
}

func main() {
	fmt.Println(numEquivDominoPairs([][]int{{1, 2}, {2, 1}, {3, 4}, {5, 6}}))         // 1
	fmt.Println(numEquivDominoPairs([][]int{{1, 2}, {1, 2}, {1, 1}, {1, 2}, {2, 2}})) // 3
}

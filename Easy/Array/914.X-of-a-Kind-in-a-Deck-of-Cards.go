/*

914. X of a Kind in a Deck of Cards

You are given an integer array deck where deck[i] represents the number written on the ith card.

Partition the cards into one or more groups such that:

Each group has exactly x cards where x > 1, and
All the cards in one group have the same integer written on them.
Return true if such partition is possible, or false otherwise.



Example 1:

Input: deck = [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
Example 2:

Input: deck = [1,1,1,2,2,2,3,3]
Output: false
Explanation: No possible partition.


Constraints:

1 <= deck.length <= 104
0 <= deck[i] < 104

Topics
Array
Hash Table
Math
Counting
Number Theory

*/

package main

import (
	"fmt"
)

// Helper function: greatest common divisor
func gcd(a, b int) int {
	for b != 0 {
		a, b = b, a%b
	}
	return a
}

func hasGroupsSizeX(deck []int) bool {
	// Count frequency of each card
	counts := make(map[int]int)
	for _, card := range deck {
		counts[card]++
	}

	// Compute gcd of all counts
	g := 0
	for _, c := range counts {
		g = gcd(g, c)
	}

	return g >= 2
}

func main() {
	fmt.Println(hasGroupsSizeX([]int{1, 2, 3, 4, 4, 3, 2, 1})) // true
	fmt.Println(hasGroupsSizeX([]int{1, 1, 1, 2, 2, 2, 3, 3})) // false
	fmt.Println(hasGroupsSizeX([]int{1}))                      // false
	fmt.Println(hasGroupsSizeX([]int{1, 1}))                   // true
}

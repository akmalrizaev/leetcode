/*

1184. Distance Between Bus Stops

A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.

The bus goes along both directions i.e. clockwise and counterclockwise.

Return the shortest distance between the given start and destination stops.

Example 1:
Input: distance = [1,2,3,4], start = 0, destination = 3
Output: 4
Explanation:
The distance between 0 and 3 is either clockwise: 1 + 2 + 3 = 6 or counterclockwise: 4. The shorter distance is 4.

Example 2:
Input: distance = [1,2,3,4], start = 0, destination = 2
Output: 3
Explanation:
The distance between 0 and 2 is either clockwise: 1 + 2 = 3 or counterclockwise: 4 + 3 = 7. The shorter distance is 3.

Example 3:
Input: distance = [1,2,3,4], start = 0, destination = 1
Output: 1

Constraints:

1 <= n <= 10^4
distance.length == n
0 <= start, destination < n
0 <= distance[i] <= 10^4

Topics
Array

⏱ Complexity

Time: O(n) — one pass through the array

Space: O(1)

*/

package main

import "fmt"

func distanceBetweenBusStops(distance []int, start int, destination int) int {
	if start > destination {
		start, destination = destination, start // ensure start < destination
	}

	total := 0
	path := 0

	for i, d := range distance {
		total += d
		if i >= start && i < destination {
			path += d
		}
	}

	// The shorter distance is either clockwise (path) or counterclockwise (total - path)
	if path < total-path {
		return path
	}
	return total - path
}

func main() {
	fmt.Println(distanceBetweenBusStops([]int{1, 2, 3, 4}, 0, 1)) // 1
	fmt.Println(distanceBetweenBusStops([]int{1, 2, 3, 4}, 0, 2)) // 3
	fmt.Println(distanceBetweenBusStops([]int{1, 2, 3, 4}, 0, 3)) // 4
}

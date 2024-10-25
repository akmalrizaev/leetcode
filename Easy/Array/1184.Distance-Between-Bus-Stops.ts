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

*/

function distanceBetweenBusStops(
  distance: number[],
  start: number,
  destination: number
): number {
  // Ensure start is always less than or equal to destination to simplify calculation
  if (start > destination) {
    [start, destination] = [destination, start];
  }

  // Calculate clockwise distance
  let clockwiseDistance = 0;
  for (let i = start; i < destination; i++) {
    clockwiseDistance += distance[i];
  }

  // Calculate total distance of the bus route
  const totalDistance = distance.reduce((acc, cur) => acc + cur, 0);

  // Counterclockwise distance is total distance minus the clockwise distance
  const counterClockwiseDistance = totalDistance - clockwiseDistance;

  // Return the shorter distance
  return Math.min(clockwiseDistance, counterClockwiseDistance);
}

// Example Usage:
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 3)); // Output: 4
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 2)); // Output: 3
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 1)); // Output: 1

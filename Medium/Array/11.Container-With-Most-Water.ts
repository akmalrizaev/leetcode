/*

11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Examples:
Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The vertical lines are drawn at the positions [0, 1, 2, 3, 4, 5, 6, 7, 8] and their heights are [1, 8, 6, 2, 5, 4, 8, 3, 7]. The maximum area of water (between lines 1 and 8) is 49.

Example 2:
Input: height = [1,1]
Output: 1

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104

Topics
Array
Two Pointers
Greedy

*/

function maxArea(height: number[]): number {
  let left = 0; // Starting pointer
  let right = height.length - 1; // Ending pointer
  let maxArea = 0; // Initialize max area

  while (left < right) {
    // Calculate the area between left and right pointers
    const width = right - left;
    const currentArea = width * Math.min(height[left], height[right]);

    // Update the maximum area found
    maxArea = Math.max(maxArea, currentArea);

    // Move the pointer that points to the shorter line
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

// Example usage:
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1])); // Output: 1
console.log(maxArea([4, 3, 2, 1, 4])); // Output: 16
console.log(maxArea([1, 2, 1])); // Output: 2

/*

976. Largest Perimeter Triangle

Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

 

Example 1:

Input: nums = [2,1,2]
Output: 5
Explanation: You can form a triangle with three side lengths: 1, 2, and 2.
Example 2:

Input: nums = [1,2,1,10]
Output: 0
Explanation: 
You cannot use the side lengths 1, 1, and 2 to form a triangle.
You cannot use the side lengths 1, 1, and 10 to form a triangle.
You cannot use the side lengths 1, 2, and 10 to form a triangle.
As we cannot use any three side lengths to form a triangle of non-zero area, we return 0.
 

Constraints:

3 <= nums.length <= 104
1 <= nums[i] <= 106

Topics
Array
Math
Greedy
Sorting

*/

function largestPerimeter(nums: number[]): number {
  // Sort the array in descending order
  nums.sort((a, b) => b - a);

  // Iterate through the sorted array and check for a valid triangle
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] < nums[i + 1] + nums[i + 2]) {
      // If the three sides form a valid triangle, return the perimeter
      return nums[i] + nums[i + 1] + nums[i + 2];
    }
  }

  // If no valid triangle is found, return 0
  return 0;
}

// Example usage:
console.log(largestPerimeter([2, 1, 2])); // Output: 5
console.log(largestPerimeter([1, 2, 1, 10])); // Output: 0
console.log(largestPerimeter([3, 2, 3, 4])); // Output: 10

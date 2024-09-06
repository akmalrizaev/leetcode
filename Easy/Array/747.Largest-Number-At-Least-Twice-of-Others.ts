/*

747. Largest Number At Least Twice of Others


You are given an integer array nums where the largest integer is unique.

Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

 

Example 1:

Input: nums = [3,6,1,0]
Output: 1
Explanation: 6 is the largest integer.
For every other number in the array x, 6 is at least twice as big as x.
The index of value 6 is 1, so we return 1.
Example 2:

Input: nums = [1,2,3,4]
Output: -1
Explanation: 4 is less than twice the value of 3, so we return -1.
 

Constraints:

2 <= nums.length <= 50
0 <= nums[i] <= 100
The largest element in nums is unique.

Topics
Array
Sorting

*/

function dominantIndex(nums: number[]): number {
  let maxIndex = 0;

  // Find the index of the largest number
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[maxIndex]) {
      maxIndex = i;
    }
  }

  // Verify if the largest number is at least twice as much as every other number
  for (let i = 0; i < nums.length; i++) {
    if (i !== maxIndex && nums[maxIndex] < 2 * nums[i]) {
      return -1;
    }
  }

  return maxIndex;
}

// Example usage:
console.log(dominantIndex([3, 6, 1, 0])); // Output: 1
console.log(dominantIndex([1, 2, 3, 4])); // Output: -1

/*
    35. Search Insert Position


Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

 

Constraints:

    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums contains distinct values sorted in ascending order.
    -104 <= target <= 104

    Topics:
Array
Binary Search

*/

function searchInsert(nums: number[], target: number): number {
  let left = 0; // Initialize the left pointer
  let right = nums.length - 1; // Initialize the right pointer

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // Calculate the middle index

    if (nums[mid] === target) {
      return mid; // If the target is found, return the index
    } else if (nums[mid] < target) {
      left = mid + 1; // Move the left pointer to the right half
    } else {
      right = mid - 1; // Move the right pointer to the left half
    }
  }

  return left; // If not found, return the insertion index
}

// Example usage:
let nums35_1 = [1, 3, 5, 6];
let target35_1 = 5;
console.log(searchInsert(nums35_1, target35_1)); // Output: 2

let nums35_2 = [1, 3, 5, 6];
let target35_2 = 2;
console.log(searchInsert(nums35_2, target35_2)); // Output: 1

let nums35_3 = [1, 3, 5, 6];
let target35_3 = 7;
console.log(searchInsert(nums35_3, target35_3)); // Output: 4

let nums35_4 = [1, 3, 5, 6];
let target35_4 = 0;
console.log(searchInsert(nums35_4, target35_4)); // Output: 0

let nums35_5 = [1, 3, 5, 6];
let target35_5 = 6;
console.log(searchInsert(nums35_5, target35_5)); // Output: 3

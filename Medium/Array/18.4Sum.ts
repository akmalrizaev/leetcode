/*

18. 4Sum

Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
 

Constraints:

1 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109

Topics
Array
Two Pointers
Sorting

*/

function fourSum(nums: number[], target: number): number[][] {
  const results: number[][] = [];

  // Sort the array to make it easier to avoid duplicates and use two pointers
  nums.sort((a, b) => a - b);

  const n = nums.length;

  for (let i = 0; i < n - 3; i++) {
    // Avoid duplicates for the first number
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < n - 2; j++) {
      // Avoid duplicates for the second number
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          results.push([nums[i], nums[j], nums[left], nums[right]]);

          // Move both pointers and avoid duplicates
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          left++;
          right--;
        } else if (sum < target) {
          left++; // We need a larger sum
        } else {
          right--; // We need a smaller sum
        }
      }
    }
  }

  return results;
}

// Example usage:
console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); // Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2, 2, 2, 2, 2], 8)); // Output: [[2,2,2,2]]

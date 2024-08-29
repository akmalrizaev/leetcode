/*

   283. Move Zeroes

   Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]

 

Constraints:

    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1

 
Follow up: Could you minimize the total number of operations done?

Topics
Array
Two Pointers

*/

function moveZeroes(nums: number[]): void {
  let left = 0; // Pointer to place the next non-zero element

  // Iterate over the array with the right pointer
  for (let right = 0; right < nums.length; right++) {
    // Check if the current element is non-zero
    if (nums[right] !== 0) {
      // Swap the elements at left and right pointers
      [nums[left], nums[right]] = [nums[right], nums[left]];
      // Increment left to point to the next position for the non-zero element
      left++;
    }
  }
}

// Example usage:
const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // Output: [1, 3, 12, 0, 0]

const nums2 = [0];
moveZeroes(nums2);
console.log(nums2); // Output: [0]

const nums3 = [1, 0, 2, 0, 3, 0, 4];
moveZeroes(nums3);
console.log(nums3); // Output: [1, 2, 3, 4, 0, 0, 0]

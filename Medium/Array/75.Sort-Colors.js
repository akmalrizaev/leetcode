/*

75. Sort Colors

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
 

Follow up: Could you come up with a one-pass algorithm using only constant extra space?

Topics
Array
Two Pointers
Sorting

*/

function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    // Traverse through the array
    while (mid <= high) {
        if (nums[mid] === 0) {
            // Swap nums[mid] and nums[low], then increment both low and mid
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            // 1 is in the correct place, just move mid
            mid++;
        } else if (nums[mid] === 2) {
            // Swap nums[mid] and nums[high], then decrement high
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
}

// Example usage:
let nums1 = [2, 0, 2, 1, 1, 0];
sortColors(nums1);
console.log(nums1); // Output: [0, 0, 1, 1, 2, 2]

let nums2 = [2, 0, 1];
sortColors(nums2);
console.log(nums2); // Output: [0, 1, 2]

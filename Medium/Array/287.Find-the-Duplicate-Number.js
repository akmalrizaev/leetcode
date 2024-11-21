/*
287. Find the Duplicate Number

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and using only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
Example 3:

Input: nums = [3,3,3,3,3]
Output: 3
 

Constraints:

1 <= n <= 105
nums.length == n + 1
1 <= nums[i] <= n
All the integers in nums appear only once except for precisely one integer which appears two or more times.
 

Follow up:

How can we prove that at least one duplicate number must exist in nums?
Can you solve the problem in linear runtime complexity?

Topics
Array
Two Pointers
Binary Search
Bit Manipulation

*/

function findDuplicate(nums) {
    // Phase 1: Finding the intersection point
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];          // Move slow pointer by 1 step
        fast = nums[nums[fast]];    // Move fast pointer by 2 steps
    } while (slow !== fast);

    // Phase 2: Finding the entrance to the cycle
    slow = nums[0];  // Reset slow to the start
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;  // The duplicate number
}

// Example usage:
console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // Output: 3
console.log(findDuplicate([2, 2, 2, 2, 2])); // Output: 2

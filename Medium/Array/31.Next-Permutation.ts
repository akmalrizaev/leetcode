/*

31. Next Permutation

A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.

 

Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100

Topics
Array
Two Pointers

*/

function nextPermutation(nums: number[]): void {
  let n = nums.length;
  let i = n - 2;

  // Step 1: Find the first decreasing element
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    // Step 2: Find the next larger element to swap with
    let j = n - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    // Step 3: Swap the elements
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // Step 4: Reverse the elements after the found index
  reverse(nums, i + 1, n - 1);
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

// Example usage:
let arr1 = [1, 2, 3];
nextPermutation(arr1);
console.log(arr1); // Output: [1, 3, 2]

let arr2 = [3, 2, 1];
nextPermutation(arr2);
console.log(arr2); // Output: [1, 2, 3]

let arr3 = [1, 1, 5];
nextPermutation(arr3);
console.log(arr3); // Output: [1, 5, 1]

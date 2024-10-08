/*

697. Degree of an Array

Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

Example 1:

Input: nums = [1,2,2,3,1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:

Input: nums = [1,2,2,3,1,4,2]
Output: 6
Explanation: 
The degree is 3 because the element 2 is repeated 3 times.
So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 

Constraints:

nums.length will be between 1 and 50,000.
nums[i] will be an integer between 0 and 49,999.

Topics
Array
Hash Table

*/

function findShortestSubArray(nums: number[]): number {
  const count: Map<number, number> = new Map();
  const firstIndex: Map<number, number> = new Map();
  const lastIndex: Map<number, number> = new Map();

  // Populate the count, firstIndex, and lastIndex maps
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!count.has(num)) {
      count.set(num, 0);
      firstIndex.set(num, i);
    }
    count.set(num, count.get(num)! + 1);
    lastIndex.set(num, i);
  }

  // Determine the degree of the array
  let degree = Math.max(...count.values());

  // Find the minimum length of subarray with the same degree
  let minLength = nums.length;
  for (const [num, freq] of count) {
    if (freq === degree) {
      minLength = Math.min(
        minLength,
        lastIndex.get(num)! - firstIndex.get(num)! + 1
      );
    }
  }

  return minLength;
}

// Example usage:
console.log(findShortestSubArray([1, 2, 2, 3, 1])); // Output: 2
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])); // Output: 6

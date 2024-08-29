/*

645. Set Mismatch


You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

Example 1:

Input: nums = [1,2,2,4]
Output: [2,3]
Example 2:

Input: nums = [1,1]
Output: [1,2]
 

Constraints:

2 <= nums.length <= 104
1 <= nums[i] <= 104

Topics
Array
Hash Table
Bit Manipulation
Sorting

*/

function findErrorNums(nums: number[]): number[] {
  const n = nums.length;
  const seen = new Set<number>();
  let duplicated = -1;
  let actualSum = 0;

  // Identify the duplicated number and calculate the sum of unique elements
  for (const num of nums) {
    if (seen.has(num)) {
      duplicated = num;
    }
    seen.add(num);
    actualSum += num;
  }

  const expectedSum = (n * (n + 1)) / 2;
  const missing = expectedSum - (actualSum - duplicated);

  return [duplicated, missing];
}

// Example usage:
console.log(findErrorNums([1, 2, 2, 4])); // Output: [2, 3]
console.log(findErrorNums([1, 1])); // Output: [1, 2]

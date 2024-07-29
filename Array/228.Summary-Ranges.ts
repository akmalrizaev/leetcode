/*

  228. Summary Ranges


  You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

    "a->b" if a != b
    "a" if a == b

 

Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"

 

Constraints:

    0 <= nums.length <= 20
    -231 <= nums[i] <= 231 - 1
    All the values of nums are unique.
    nums is sorted in ascending order.

Topics
Array

*/

function summaryRanges(nums: number[]): string[] {
  // Initialize the result array
  const result: string[] = [];
  const n = nums.length;

  // Base case: if nums is empty, return an empty array
  if (n === 0) {
    return result;
  }

  // Initialize start of the first range
  let start = nums[0];

  // Iterate over the array
  for (let i = 0; i < n; i++) {
    // Check if the current element is not consecutive
    // i+1 should be checked because we may go out of bounds
    if (i + 1 === n || nums[i] + 1 !== nums[i + 1]) {
      // If start is equal to nums[i], then the range is a single number
      if (start === nums[i]) {
        result.push(`${start}`);
      } else {
        // Otherwise, create a range from start to nums[i]
        result.push(`${start}->${nums[i]}`);
      }
      // Update start for the next potential range
      if (i + 1 < n) {
        start = nums[i + 1];
      }
    }
  }

  // Return the result array with ranges
  return result;
}

// Example usage:
console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // Output: ["0->2", "4->5", "7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); // Output: ["0", "2->4", "6", "8->9"]
console.log(summaryRanges([])); // Output: []
console.log(summaryRanges([-1])); // Output: ["-1"]
console.log(summaryRanges([0])); // Output: ["0"]

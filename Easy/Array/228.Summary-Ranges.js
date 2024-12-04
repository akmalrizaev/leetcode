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

function summaryRanges(nums) {
  const ranges = [];
  let start = 0; // Start index of the current range

  for (let i = 0; i < nums.length; i++) {
      // Check if the current number is not consecutive
      if (i + 1 === nums.length || nums[i] + 1 !== nums[i + 1]) {
          // If start == i, the range is a single number
          if (start === i) {
              ranges.push(`${nums[start]}`);
          } else {
              ranges.push(`${nums[start]}->${nums[i]}`);
          }
          // Update the start to the next number
          start = i + 1;
      }
  }

  return ranges;
}

// Example usage:
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));      // Output: ["0->2","4->5","7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));   // Output: ["0","2->4","6","8->9"]
console.log(summaryRanges([]));                      // Output: []
console.log(summaryRanges([-1]));                    // Output: ["-1"]
console.log(summaryRanges([1, 3]));                  // Output: ["1","3"]

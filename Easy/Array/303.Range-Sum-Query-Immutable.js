/*

  303. Range Sum Query - Immutable


  Given an integer array nums, handle multiple queries of the following type:

    Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.

Implement the NumArray class:

    NumArray(int[] nums) Initializes the object with the integer array nums.
    int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

 

Example 1:

Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

 

Constraints:

    1 <= nums.length <= 104
    -105 <= nums[i] <= 105
    0 <= left <= right < nums.length
    At most 104 calls will be made to sumRange.

Topics
Array
Design
Prefix Sum

*/

class NumArray {
    constructor(nums) {
        // Compute the prefix sum
        this.prefixSum = new Array(nums.length + 1).fill(0);
        for (let i = 1; i <= nums.length; i++) {
            this.prefixSum[i] = this.prefixSum[i - 1] + nums[i - 1];
        }
    }

    sumRange(left, right) {
        // Use the prefix sum to calculate the range sum
        return this.prefixSum[right + 1] - this.prefixSum[left];
    }
}

// Example usage:
const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // Output: 1
console.log(numArray.sumRange(2, 5)); // Output: -1
console.log(numArray.sumRange(0, 5)); // Output: -3

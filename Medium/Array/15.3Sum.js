/*

15. 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105

Topics
Array
Two Pointers
Sorting

*/

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    triplets = [];
    for (i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) { // skip same element to avoid duplicate triplets
            continue;
        }
        search_pair(nums, -nums[i], i + 1, triplets);
    }

    return triplets;
    
};

function search_pair(arr, target_sum, left, triplets) {
    let right = arr.length - 1;
    while (left < right) {
        const current_sum = arr[left] + arr[right];
        if (current_sum === target_sum) { // found the triplet
            triplets.push([-target_sum, arr[left], arr[right]]);
            left += 1;
            right -= 1;
            while( left < right && arr[left] === arr[left - 1]) {
                left += 1;  // skip same element to avoid duplicate triplets
            }
            while ( left < right && arr[right] === arr[right + 1]) {
                right -= 1; // skip same element to avoid duplicate triplets
            }

        } else if (target_sum > current_sum) {
            left += 1;  // we need a pair with a bigger sum
        } else {
            right -= 1;  // we need a pair with a smaller sum
        }
    }
}
/*

16. 3Sum Closest

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 

Constraints:

3 <= nums.length <= 500
-1000 <= nums[i] <= 1000
-104 <= target <= 104

Topics
Array
Two Pointers
Sorting

*/

function threeSumClosest(nums, target) {
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);

    // Initialize the closest sum to a large value
    let closestSum = Infinity;

    // Step 2: Iterate through the array
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        // Step 3: Use two-pointer technique
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            // Update the closest sum if the current one is closer
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            // Move the pointers based on the comparison with the target
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                // If the current sum is exactly equal to the target, return it
                return currentSum;
            }
        }
    }

    return closestSum;
}

// Example usage:
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // Output: 2
console.log(threeSumClosest([0, 0, 0], 1)); // Output: 0

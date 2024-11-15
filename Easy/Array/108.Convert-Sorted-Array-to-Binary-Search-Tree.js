/*

108. Convert Sorted Array to Binary Search Tree


Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced binary search tree.

Example 1:


Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:


Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in a strictly increasing order.

Array
Divide and Conquer
Tree
Binary Search Tree
Binary Tree

*/

// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function sortedArrayToBST(nums) {
    // Helper function to build the BST recursively
    function helper(left, right) {
        // Base case: if the pointers cross, return null
        if (left > right) return null;

        // Choose the middle element to maintain balance
        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(nums[mid]);

        // Recursively build the left and right subtrees
        root.left = helper(left, mid - 1);
        root.right = helper(mid + 1, right);

        return root;
    }

    // Start the recursive tree building
    return helper(0, nums.length - 1);
}

// Example usage:
const nums1 = [-10, -3, 0, 5, 9];
const tree1 = sortedArrayToBST(nums1);
console.log(tree1);

const nums2 = [1, 3];
const tree2 = sortedArrayToBST(nums2);
console.log(tree2);

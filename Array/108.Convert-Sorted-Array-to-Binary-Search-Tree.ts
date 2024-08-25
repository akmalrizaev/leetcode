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

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  function helper(left: number, right: number): TreeNode | null {
    if (left > right) {
      return null; // Base case: empty subtree
    }

    // Middle element to maintain balance
    const mid = Math.floor((left + right) / 2);
    const root = new TreeNode(nums[mid]);

    // Recursively build left and right subtrees
    root.left = helper(left, mid - 1);
    root.right = helper(mid + 1, right);

    return root;
  }

  return helper(0, nums.length - 1);
}

// Example usage:
const nums1 = [-10, -3, 0, 5, 9];
const bst1 = sortedArrayToBST(nums1);
console.log(bst1);

const nums2 = [1, 3];
const bst2 = sortedArrayToBST(nums2);
console.log(bst2);

"""
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

"""
# Definition for a binary tree node.


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def sortedArrayToBST(nums):
    # Base case: empty array
    if not nums:
        return None

    # Find the middle element
    mid = len(nums) // 2

    # Create a new tree node with the middle element
    root = TreeNode(nums[mid])

    # Recursively construct the left and right subtrees
    root.left = sortedArrayToBST(nums[:mid])  # Left part
    root.right = sortedArrayToBST(nums[mid+1:])  # Right part

    return root

# Helper function to print the tree (inorder traversal)


def inorder_traversal(root):
    if root:
        inorder_traversal(root.left)
        print(root.val, end=" ")
        inorder_traversal(root.right)


# Example Usage
nums = [-10, -3, 0, 5, 9]
root = sortedArrayToBST(nums)
print("Inorder Traversal of the BST:")
inorder_traversal(root)

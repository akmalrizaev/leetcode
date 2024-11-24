/*
206. Reverse Linked List

Given the head of a singly linked list, reverse the list and return the reversed list.

Examples:
Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

Topics
Linked List
Recursion

*/

function reverseList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let next = current.next;  // Store the next node
        current.next = prev;      // Reverse the current node's pointer
        prev = current;           // Move prev to the current node
        current = next;           // Move to the next node
    }

    return prev; // New head of the reversed list
}

// Helper function to create and print a linked list
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Example usage:
// Create linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const reversedHead = reverseList(head);

// Function to print the linked list
function printList(node) {
    const result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result);
}

printList(reversedHead); // Output: [5, 4, 3, 2, 1]

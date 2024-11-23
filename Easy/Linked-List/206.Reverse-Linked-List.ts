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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (current !== null) {
    const nextNode = current.next; // Store next node
    current.next = prev; // Reverse the link
    prev = current; // Move prev to current
    current = nextNode; // Move current to next node
  }

  return prev; // New head of the reversed list
}

// Example Usage:
const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
console.log(reverseList(head)); // Output: ListNode with values [5, 4, 3, 2, 1]

/*
92. Reverse Linked List II

Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Examples:
Example 1:
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:
Input: head = [5], left = 1, right = 1
Output: [5]

Constraints:
The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
Follow-up:
Could you do it in one pass?

Topics
Linked List
*/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (head === null || left === right) return head;

  const dummy = new ListNode(0, head);
  let prev: ListNode | null = dummy;

  // Move `prev` to the node before `left`
  for (let i = 1; i < left; i++) {
    prev = prev.next!;
  }

  // `start` will be the first node of the sublist to be reversed
  const start: ListNode | null = prev.next;
  let then: ListNode | null = start!.next;

  // Reverse nodes from `left` to `right`
  for (let i = 0; i < right - left; i++) {
    start!.next = then!.next;
    then!.next = prev.next;
    prev.next = then;
    then = start!.next;
  }

  return dummy.next;
}

// Example Usage:
const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
console.log(reverseBetween(head, 2, 4)); // Output: ListNode with values [1,4,3,2,5]

/*

876. Middle of the Linked List

Description:
Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.

Examples

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node is 3.

Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

Constraints:
The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100

*/

class ListNode_876 {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}

// Example Usage:
// Constructing a linked list [1, 2, 3, 4, 5]
const node_876_5 = new ListNode(5);
const node_876_4 = new ListNode(4, node_876_5);
const node_876_3 = new ListNode(3, node_876_4);
const node_876_2 = new ListNode(2, node_876_3);
const head_876 = new ListNode(1, node_876_2);

console.log(middleNode(head_876)); // Output: Node with value 3

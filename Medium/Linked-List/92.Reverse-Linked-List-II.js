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

function reverseBetween(head, left, right) {
    // Create a dummy node to simplify edge cases
    const dummy = new ListNode(0);
    dummy.next = head;
    
    let prev = dummy;

    // Move `prev` to the node before `left`
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }

    // Initialize pointers for reversal
    let start = prev.next;      // The `left`th node
    let then = start.next;      // The node right after `start`

    // Reverse the sublist between `left` and `right`
    for (let i = 0; i < right - left; i++) {
        start.next = then.next;
        then.next = prev.next;
        prev.next = then;
        then = start.next;
    }

    return dummy.next;  // Return the new head
}

// Helper function to create a linked list node
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Helper function to print the linked list
function printList(node) {
    const result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result);
}

// Example usage:
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const left = 2, right = 4;
const result = reverseBetween(head, left, right);
printList(result); // Output: [1, 4, 3, 2, 5]

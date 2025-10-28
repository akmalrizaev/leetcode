/*

141. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.


Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.

Topics
Hash Table
Linked List
Two Pointers

⏱️ Complexity
Type	Complexity
Time	O(n) — each pointer visits each node at most once
Space	O(1) — only two pointers used

*/

package main

import "fmt"

// Definition for singly-linked list.
type ListNode struct {
	Val  int
	Next *ListNode
}

func hasCycle(head *ListNode) bool {
	if head == nil || head.Next == nil {
		return false
	}

	slow := head
	fast := head

	for fast != nil && fast.Next != nil {
		slow = slow.Next      // move 1 step
		fast = fast.Next.Next // move 2 steps
		if slow == fast {     // pointers meet
			return true
		}
	}

	return false
}

// Helper function for testing
func main() {
	// Create nodes
	n1 := &ListNode{Val: 3}
	n2 := &ListNode{Val: 2}
	n3 := &ListNode{Val: 0}
	n4 := &ListNode{Val: -4}

	// Link nodes: 3 -> 2 -> 0 -> -4 -> 2 (cycle)
	n1.Next = n2
	n2.Next = n3
	n3.Next = n4
	n4.Next = n2

	fmt.Println(hasCycle(n1)) // true
}

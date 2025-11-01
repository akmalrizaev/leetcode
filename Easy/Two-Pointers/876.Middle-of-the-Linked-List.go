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

Topics
Linked List
Two Pointers

⏱️ Complexity
Type	Complexity
Time	O(n) — traverses list once
Space	O(1) — only two pointers used

*/

package main

import "fmt"

// Definition for singly-linked list.
type ListNode struct {
	Val  int
	Next *ListNode
}

func middleNode(head *ListNode) *ListNode {
	slow := head
	fast := head

	for fast != nil && fast.Next != nil {
		slow = slow.Next      // move one step
		fast = fast.Next.Next // move two steps
	}

	return slow
}

// Helper function for testing
func main() {
	n1 := &ListNode{Val: 1}
	n2 := &ListNode{Val: 2}
	n3 := &ListNode{Val: 3}
	n4 := &ListNode{Val: 4}
	n5 := &ListNode{Val: 5}
	n6 := &ListNode{Val: 6}

	// Example 1: 1->2->3->4->5
	n1.Next = n2
	n2.Next = n3
	n3.Next = n4
	n4.Next = n5
	fmt.Println(middleNode(n1).Val) // Output: 3

	// Example 2: 1->2->3->4->5->6
	n5.Next = n6
	fmt.Println(middleNode(n1).Val) // Output: 4
}

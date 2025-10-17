/*

1160. Find Words That Can Be Formed by Characters

You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.



Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.


Constraints:

1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
words[i] and chars consist of lowercase English letters.

Topics
Array
Hash Table
String
Counting

⏱ Complexity

Time: O(n * m) — for each word (length m), we check letters

Space: O(1) — only 26 letters in alphabet

*/

package main

import "fmt"

func countCharacters(words []string, chars string) int {
	// Step 1: Count frequency of each character in chars
	charCount := make([]int, 26)
	for _, c := range chars {
		charCount[c-'a']++
	}

	total := 0

	// Step 2: Check each word
	for _, word := range words {
		if canForm(word, charCount) {
			total += len(word)
		}
	}

	return total
}

// Helper function to check if word can be formed
func canForm(word string, charCount []int) bool {
	// Make a copy of charCount to avoid modifying the original
	count := make([]int, 26)
	copy(count, charCount)

	for _, c := range word {
		count[c-'a']--
		if count[c-'a'] < 0 {
			return false
		}
	}
	return true
}

func main() {
	fmt.Println(countCharacters([]string{"cat", "bt", "hat", "tree"}, "atach"))            // 6
	fmt.Println(countCharacters([]string{"hello", "world", "leetcode"}, "welldonehoneyr")) // 10
}

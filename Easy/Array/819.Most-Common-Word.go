/*

819. Most Common Word


Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase.



Example 1:

Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
Output: "ball"
Explanation:
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"),
and that "hit" isn't the answer even though it occurs more because it is banned.
Example 2:

Input: paragraph = "a.", banned = []
Output: "a"


Constraints:

1 <= paragraph.length <= 1000
paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
0 <= banned.length <= 100
1 <= banned[i].length <= 10
banned[i] consists of only lowercase English letters.

Topics
Array
Hash Table
String
Counting

*/

package main

import (
	"strings"
	"unicode"
)

func mostCommonWord(paragraph string, banned []string) string {
	bannedSet := make(map[string]bool)
	for _, word := range banned {
		bannedSet[word] = true
	}

	wordFreq := make(map[string]int)
	word := strings.Builder{}

	// Normalize paragraph: remove punctuations, lowercase
	for i, ch := range paragraph {
		if unicode.IsLetter(ch) {
			word.WriteRune(unicode.ToLower(ch))
		} else if word.Len() > 0 {
			w := word.String()
			if !bannedSet[w] {
				wordFreq[w]++
			}
			word.Reset()
		}
	}

	// Handle last word if paragraph doesn't end with punctuation
	if word.Len() > 0 {
		w := word.String()
		if !bannedSet[w] {
			wordFreq[w]++
		}
	}

	// Find the word with the highest frequency
	maxCount := 0
	res := ""
	for w, count := range wordFreq {
		if count > maxCount {
			maxCount = count
			res = w
		}
	}

	return res
}

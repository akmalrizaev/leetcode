"""
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
"""

from typing import List
import re
from collections import Counter


class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        # Normalize paragraph by replacing non-alphabetic characters with spaces and converting to lowercase
        words = re.findall(r'\w+', paragraph.lower())

        # Create a set of banned words for quick lookup
        banned_set = set(banned)

        # Count word frequencies, ignoring banned words
        word_counts = Counter(word for word in words if word not in banned_set)

        # Find the word with the highest frequency
        return max(word_counts, key=word_counts.get)


# Example usage
solution = Solution()
print(solution.mostCommonWord(
    # Output: "ball"
    "Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]))
print(solution.mostCommonWord("a, a, a, a, b,b,b,c, c", [
      "a"]))                                   # Output: "b"

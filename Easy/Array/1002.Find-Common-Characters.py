"""
1002. Find Common Characters

Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

Example 1:

Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: words = ["cool","lock","cook"]
Output: ["c","o"]
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of lowercase English letters.

Topics
Array
Hash Table
String
"""

from typing import List
from collections import Counter


class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        # Initialize the frequency of characters to a large value (inf)
        common_count = Counter(words[0])

        # Update common_count by taking min frequency with each word
        for word in words[1:]:
            word_count = Counter(word)
            for char in list(common_count.keys()):
                if char in word_count:
                    common_count[char] = min(
                        common_count[char], word_count[char])
                else:
                    del common_count[char]

        # Convert the common_count dictionary to a list of characters
        result = []
        for char, freq in common_count.items():
            result.extend([char] * freq)

        return result


solution = Solution()
# Output: ["e","l","l"]
print(solution.commonChars(["bella", "label", "roller"]))
print(solution.commonChars(["cool", "lock", "cook"]))     # Output: ["c","o"]

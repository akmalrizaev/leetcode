"""
49. Group Anagrams

Medium

Given an array of strings strs, group the 
anagrams
 together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

Topics
Array
Hash Table
String
Sorting

"""

# Approach: Hash Map with Sorted Key
from collections import defaultdict
from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = defaultdict(list)

        for word in strs:
            # Sort the word to create the key
            sorted_key = "".join(sorted(word))
            anagrams[sorted_key].append(word)  # Group by the sorted key

        return list(anagrams.values())  # Return all groups of anagrams


# Alternative Approach: Character Count Key
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = defaultdict(list)

        for word in strs:
            count = [0] * 26  # Character count for each letter in 'a' to 'z'
            for char in word:
                count[ord(char) - ord('a')] += 1
            # Use tuple of counts as the key
            anagrams[tuple(count)].append(word)

        return list(anagrams.values())

"""
705. Design HashSet

Design a HashSet without using any built-in hash table libraries.

Implement MyHashSet class:

void add(key) Inserts the value key into the HashSet.
bool contains(key) Returns whether the value key exists in the HashSet or not.
void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 

Example 1:

Input
["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
[[], [1], [2], [1], [3], [2], [2], [2], [2]]
Output
[null, null, null, true, false, null, true, null, false]

Explanation
MyHashSet myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // return True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // return False, (already removed)
 

Constraints:

0 <= key <= 106
At most 104 calls will be made to add, remove, and contains.

Topics
Array
Hash Table
Linked List
Design
Hash Function
"""


class MyHashSet:
    def __init__(self):
        self.bucket_size = 1000
        self.buckets = [[] for _ in range(self.bucket_size)]

    def _hash(self, key: int) -> int:
        return key % self.bucket_size

    def add(self, key: int) -> None:
        bucket_index = self._hash(key)
        if key not in self.buckets[bucket_index]:
            self.buckets[bucket_index].append(key)

    def remove(self, key: int) -> None:
        bucket_index = self._hash(key)
        if key in self.buckets[bucket_index]:
            self.buckets[bucket_index].remove(key)

    def contains(self, key: int) -> bool:
        bucket_index = self._hash(key)
        return key in self.buckets[bucket_index]


# Example usage
hash_set = MyHashSet()
hash_set.add(1)
hash_set.add(2)
print(hash_set.contains(1))  # Output: True
print(hash_set.contains(3))  # Output: False
hash_set.add(2)
print(hash_set.contains(2))  # Output: True
hash_set.remove(2)
print(hash_set.contains(2))  # Output: False

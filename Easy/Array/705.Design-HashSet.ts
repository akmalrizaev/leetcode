/*

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

*/

class MyHashSet {
  private data: boolean[];

  constructor() {
    // Initialize the boolean array to track the presence of elements
    this.data = new Array(10 ** 6 + 1).fill(false);
  }

  add(key: number): void {
    // Mark the key as present
    this.data[key] = true;
  }

  remove(key: number): void {
    // Mark the key as not present
    this.data[key] = false;
  }

  contains(key: number): boolean {
    // Check if the key is present
    return this.data[key];
  }
}

/* Example Usage */
const myHashSet = new MyHashSet();
myHashSet.add(1); // Add key 1
myHashSet.add(2); // Add key 2
console.log(myHashSet.contains(1)); // Returns true
console.log(myHashSet.contains(3)); // Returns false
myHashSet.add(2); // Add key 2 (again)
console.log(myHashSet.contains(2)); // Returns true
myHashSet.remove(2); // Remove key 2
console.log(myHashSet.contains(2)); // Returns false

/*

706. Design HashMap

Design a HashMap without using any built-in hash table libraries.

Implement the MyHashMap class:

MyHashMap() initializes the object with an empty map.
void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
 

Example 1:

Input
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output
[null, null, null, 1, -1, null, 1, null, -1]

Explanation
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]
 

Constraints:

0 <= key, value <= 106
At most 104 calls will be made to put, get, and remove.

Topics
Array
Hash Table
Linked List
Design
Hash Function

*/

class MyHashMap {
  private bucket: Array<[number, number][]>; // Array of linked lists (key-value pairs)
  private size: number;

  constructor() {
    this.size = 1000; // Choosing a prime number for better distribution
    this.bucket = new Array(this.size).fill(null).map(() => []);
  }

  private hash(key: number): number {
    // Simple modulo based hashing function
    return key % this.size;
  }

  put(key: number, value: number): void {
    const hashKey = this.hash(key);
    const bucketList = this.bucket[hashKey];

    // Check if the key exists in the bucket list and update it
    for (let i = 0; i < bucketList.length; i++) {
      if (bucketList[i][0] === key) {
        bucketList[i][1] = value; // Update the value
        return;
      }
    }

    // If key does not exist, add a new key-value pair
    bucketList.push([key, value]);
  }

  get(key: number): number {
    const hashKey = this.hash(key);
    const bucketList = this.bucket[hashKey];

    // Search for the key in the bucket list
    for (let i = 0; i < bucketList.length; i++) {
      if (bucketList[i][0] === key) {
        return bucketList[i][1]; // Return the value if key is found
      }
    }

    return -1; // Return -1 if the key does not exist
  }

  remove(key: number): void {
    const hashKey = this.hash(key);
    const bucketList = this.bucket[hashKey];

    // Search for the key and remove the key-value pair if found
    for (let i = 0; i < bucketList.length; i++) {
      if (bucketList[i][0] === key) {
        bucketList.splice(i, 1); // Remove the key-value pair
        return;
      }
    }
  }
}

/* Example Usage */
const myHashMap = new MyHashMap();
myHashMap.put(1, 1); // Add key 1 with value 1
myHashMap.put(2, 2); // Add key 2 with value 2
console.log(myHashMap.get(1)); // Returns 1
console.log(myHashMap.get(3)); // Returns -1 (not found)
myHashMap.put(2, 1); // Update key 2 to value 1
console.log(myHashMap.get(2)); // Returns 1
myHashMap.remove(2); // Removes key 2
console.log(myHashMap.get(2)); // Returns -1 (not found)

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

package main

type Pair struct {
	Key   int
	Value int
}

type MyHashMap struct {
	buckets [][]Pair
	size    int
}

func Constructor() MyHashMap {
	return MyHashMap{
		buckets: make([][]Pair, 769), // Use a prime number as the number of buckets
		size:    769,
	}
}

// Hash function to compute the index
func (this *MyHashMap) hash(key int) int {
	return key % this.size
}

// Put a key-value pair into the HashMap
func (this *MyHashMap) Put(key int, value int) {
	index := this.hash(key)
	bucket := this.buckets[index]
	for i, pair := range bucket {
		if pair.Key == key {
			this.buckets[index][i].Value = value // Update value if key exists
			return
		}
	}
	this.buckets[index] = append(bucket, Pair{Key: key, Value: value}) // Add new key-value pair
}

// Get the value for a key
func (this *MyHashMap) Get(key int) int {
	index := this.hash(key)
	bucket := this.buckets[index]
	for _, pair := range bucket {
		if pair.Key == key {
			return pair.Value
		}
	}
	return -1 // Key not found
}

// Remove a key-value pair from the HashMap
func (this *MyHashMap) Remove(key int) {
	index := this.hash(key)
	bucket := this.buckets[index]
	for i, pair := range bucket {
		if pair.Key == key {
			this.buckets[index] = append(bucket[:i], bucket[i+1:]...) // Remove the key-value pair
			return
		}
	}
}

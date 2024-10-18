/*

1046. Last Stone Weight

You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0.

 

Example 1:

Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
Example 2:

Input: stones = [1]
Output: 1
 

Constraints:

1 <= stones.length <= 30
1 <= stones[i] <= 1000

Topics
Array
Heap (Priority Queue)

*/

class MaxHeap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  insert(value: number) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMax(): number | undefined {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);
    return max;
  }

  size(): number {
    return this.heap.length;
  }

  private heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  private heapifyDown(index: number) {
    while (this.hasLeftChild(index)) {
      let largerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) > this.leftChild(index)
      ) {
        largerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] > this.heap[largerChildIndex]) {
        break;
      } else {
        this.swap(index, largerChildIndex);
      }
      index = largerChildIndex;
    }
  }

  private getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  private getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  private hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  private hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  private hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0;
  }

  private leftChild(index: number): number {
    return this.heap[this.getLeftChildIndex(index)];
  }

  private rightChild(index: number): number {
    return this.heap[this.getRightChildIndex(index)];
  }

  private parent(index: number): number {
    return this.heap[this.getParentIndex(index)];
  }

  private swap(indexOne: number, indexTwo: number) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }
}

function lastStoneWeight(stones: number[]): number {
  const maxHeap = new MaxHeap();

  // Insert all stones into the max heap
  for (const stone of stones) {
    maxHeap.insert(stone);
  }

  // Continue smashing stones until there is at most one left
  while (maxHeap.size() > 1) {
    const stone1 = maxHeap.extractMax()!;
    const stone2 = maxHeap.extractMax()!;

    if (stone1 !== stone2) {
      maxHeap.insert(stone1 - stone2);
    }
  }

  // Return the last remaining stone or 0 if no stones are left
  return maxHeap.size() === 1 ? maxHeap.extractMax()! : 0;
}

// Example usage:
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // Output: 1
console.log(lastStoneWeight([1])); // Output: 1

/*

904. Fruit Into Baskets

You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.

 

Example 1:

Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.
Example 2:

Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].
Example 3:

Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].
 

Constraints:

1 <= fruits.length <= 105
0 <= fruits[i] < fruits.length

Topics
Array
Hash Table
Sliding Window

*/

function totalFruit(fruits: number[]): number {
  const basket = new Map<number, number>();
  let maxFruits = 0;
  let start = 0;

  for (let end = 0; end < fruits.length; end++) {
    // Add the current fruit type to the basket (or increment its count)
    basket.set(fruits[end], (basket.get(fruits[end]) || 0) + 1);

    // If we have more than two types, shrink the window from the left
    while (basket.size > 2) {
      const fruitAtStart = fruits[start];
      basket.set(fruitAtStart, basket.get(fruitAtStart)! - 1);
      if (basket.get(fruitAtStart) === 0) {
        basket.delete(fruitAtStart);
      }
      start++;
    }

    // Calculate the maximum number of fruits collected
    maxFruits = Math.max(maxFruits, end - start + 1);
  }

  return maxFruits;
}

// Example Usage
console.log(totalFruit([1, 2, 1])); // Output: 3
console.log(totalFruit([0, 1, 2, 2])); // Output: 3
console.log(totalFruit([1, 2, 3, 2, 2])); // Output: 4

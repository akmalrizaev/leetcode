/*

  349. Intersection of Two Arrays


  Given two integer arrays nums1 and nums2, return an array of their
intersection
. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

 

Constraints:

    1 <= nums1.length, nums2.length <= 1000
    0 <= nums1[i], nums2[i] <= 1000

Topics
Array
Hash Table
Two Pointers
Binary Search
Sorting

*/

function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const resultSet = new Set();

    for (const num of nums2) {
        if (set1.has(num)) {
            resultSet.add(num);
        }
    }

    return Array.from(resultSet);
}

// Example usage:
console.log(intersection([1, 2, 2, 1], [2, 2]));        // Output: [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));  // Output: [9, 4]

/*

455. Assign Cookies


Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

 

Example 1:

Input: g = [1,2,3], s = [1,1]
Output: 1
Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
You need to output 1.

Example 2:

Input: g = [1,2], s = [1,2,3]
Output: 2
Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
You have 3 cookies and their sizes are big enough to gratify all of the children, 
You need to output 2.

 

Constraints:

    1 <= g.length <= 3 * 104
    0 <= s.length <= 3 * 104
    1 <= g[i], s[j] <= 231 - 1

Array
Two Pointers
Greedy
Sorting

*/

function findContentChildren(g: number[], s: number[]): number {
  // Sort both arrays
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let childIndex = 0; // Pointer for children
  let cookieIndex = 0; // Pointer for cookies

  // Iterate over both arrays
  while (childIndex < g.length && cookieIndex < s.length) {
    if (s[cookieIndex] >= g[childIndex]) {
      // If the current cookie can satisfy the current child
      childIndex++; // Move to the next child
    }
    // Always move to the next cookie
    cookieIndex++;
  }

  return childIndex; // The number of satisfied children
}

// Example usage:
const g1 = [1, 2, 3];
const s1 = [1, 1];
console.log(findContentChildren(g1, s1)); // Output: 1

const g2 = [1, 2];
const s2 = [1, 2, 3];
console.log(findContentChildren(g2, s2)); // Output: 2

const g3 = [10, 9, 8, 7];
const s3 = [5, 6, 7, 8];
console.log(findContentChildren(g3, s3)); // Output: 2

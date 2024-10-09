/*

997. Find the Town Judge

In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.

Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

 

Example 1:

Input: n = 2, trust = [[1,2]]
Output: 2
Example 2:

Input: n = 3, trust = [[1,3],[2,3]]
Output: 3
Example 3:

Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
 

Constraints:

1 <= n <= 1000
0 <= trust.length <= 104
trust[i].length == 2
All the pairs of trust are unique.
ai != bi
1 <= ai, bi <= n

Topics
Array
Hash Table
Graph

*/

function findJudge(n: number, trust: number[][]): number {
  if (n === 1) return 1; // If there is only one person, they are the judge.

  let trusts = new Array(n + 1).fill(0); // Number of people each person trusts.
  let trustedBy = new Array(n + 1).fill(0); // Number of people who trust this person.

  for (const [a, b] of trust) {
    trusts[a]++; // Person 'a' trusts someone.
    trustedBy[b]++; // Person 'b' is trusted by someone.
  }

  for (let i = 1; i <= n; i++) {
    if (trusts[i] === 0 && trustedBy[i] === n - 1) {
      return i; // This person trusts nobody and is trusted by everyone else.
    }
  }

  return -1; // No town judge found.
}

// Example usage:
console.log(findJudge(2, [[1, 2]])); // Output: 2
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ])
); // Output: 3
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
); // Output: -1

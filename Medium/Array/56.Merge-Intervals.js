/*

56. Merge Intervals

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104

Topics
Array
Sorting

*/

function merge(intervals) {
    if (intervals.length === 0) return [];

    // Step 1: Sort intervals based on the start time
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [];
    // Step 2: Iterate through the sorted intervals
    for (let i = 0; i < intervals.length; i++) {
        // If merged is empty or there is no overlap, add the current interval
        if (merged.length === 0 || merged[merged.length - 1][1] < intervals[i][0]) {
            merged.push(intervals[i]);
        } else {
            // There is overlap, so merge the current interval with the previous one
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intervals[i][1]);
        }
    }

    return merged;
}

// Example usage:
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // Output: [[1, 6], [8, 10], [15, 18]]
console.log(merge([[1, 4], [4, 5]])); // Output: [[1, 5]]
console.log(merge([[1, 4], [0, 0]])); // Output: [[0, 0], [1, 4]]


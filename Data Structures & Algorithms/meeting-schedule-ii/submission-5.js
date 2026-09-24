/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const start = [];
        const end = [];
        //const sortedStart = [];
        //const sortedEnd = [];

        for (let i = 0; i < intervals.length; i++) {
            start.push(intervals[i].start);
            end.push(intervals[i].end);
        }

        start.sort((a, b) => a - b);
        end.sort((a, b) => a - b);

        console.log(start);
        console.log(end);

        let s = 0;
        let  e = 0;
        let count = 0;
        let maxCount = 0;

        while (s < intervals.length) {
            if (start[s] < end[e]) {
                count += 1;
                console.log(count)
                maxCount = Math.max(maxCount, count);
                s += 1;
            } else {
                count -= 1;
                e += 1;
            }
        }

        return maxCount;
    }
}

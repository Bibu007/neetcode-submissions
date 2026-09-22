class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        let count = 0;

        const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
        let temp = [...sortedIntervals[0]];

        for (let i = 1; i < sortedIntervals.length; i++) {
            if (sortedIntervals[i][0] < temp[1]) {
                count += 1;
                if (intervals[i][1] >= temp[1]) {
                    temp = [...temp];
                } else {
                    temp = [...intervals[i]];
                }
            } else {
                temp = [...intervals[i]];
            }
        }

        return count;
    }
}

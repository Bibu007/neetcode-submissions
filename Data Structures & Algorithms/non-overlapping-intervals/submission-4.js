class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        let count = 0;

        const sortedIntervals = intervals.sort((a, b) => a[1] - b[1]);
        let lastIndex = 0;

        for (let i = 1; i < sortedIntervals.length; i++) {
            if (sortedIntervals[i][0] < sortedIntervals[lastIndex][1]) {
                count++;
            } else {
                lastIndex = i;
            }
        }

        return count;
    }
}

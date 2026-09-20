class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        
        const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
        const res = [sortedIntervals[0]];

        for (let i = 1; i < sortedIntervals.length; i++) {
            
            if (sortedIntervals[i][0] <= res.at(-1)[1]) {
                res[res.length - 1] = [
                    Math.min(res.at(-1)[0], sortedIntervals[i][0]),
                    Math.max(res.at(-1)[1], sortedIntervals[i][1]),
                ];
                
            } else {
                res.push(sortedIntervals[i]);
            }
        }

        
        return res;
    }
}

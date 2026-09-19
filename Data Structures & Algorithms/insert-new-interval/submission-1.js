class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const res = [];
        for (let i = 0; i < intervals.length; i++) {
            if (newInterval[1] < intervals[i][0]) {
                res.push(newInterval);
                if(i === 0){
                    res.push(...intervals);
                }
                else{
                    res.push(...intervals.slice(i))
                }
                return res;
            } else if (newInterval[0] > intervals[i][1]) {
                res.push([...intervals[i]]);
            } else {
                newInterval = [
                    Math.min(intervals[i][0], newInterval[0]),
                    Math.max(intervals[i][1], newInterval[1]),
                ];
                //console.log
                
            }
            
        }
        res.push([...newInterval]);
        return res;
    }
}

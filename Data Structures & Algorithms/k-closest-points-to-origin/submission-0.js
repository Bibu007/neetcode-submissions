class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let minHeap = new MinPriorityQueue((item) => item[1]);
        let res = [];

        for(let i = 0; i < points.length; i++){
            let temp = [];

            let dist = points[i][0]**2 + points[i][1]**2;

            temp.push(points[i]);
            temp.push(dist);

            minHeap.enqueue(temp);
        }
        
        for(let i = 0; i < k; i++){
            res.push(minHeap.dequeue()[0]);
        }

        return res;
    }
}

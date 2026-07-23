class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let frequencyMap = {};
        let maxHeap = new MaxPriorityQueue();
        let q = [];
        let time = 0;

        for (let i = 0; i < tasks.length; i++) {
            if (!frequencyMap[tasks[i]]) {
                frequencyMap[tasks[i]] = 1;
            } else {
                frequencyMap[tasks[i]]++;
            }
        }

        //console.log(frequencyMap);

        for (const c in frequencyMap) {
            maxHeap.enqueue(frequencyMap[c]);
        }

        //console.log(maxHeap);

        while(!maxHeap.isEmpty() || q.length > 0){
            time++;
            if(!(maxHeap.isEmpty())){
                let count = maxHeap.dequeue() - 1;
                if (count > 0) {
                    // Task can be processed again at current time + n
                    q.push([count, time + n]);
                }
            }

            if(q.length > 0){
                if(q[0][1] === time){
                    maxHeap.enqueue(q[0][0]);
                    q.shift();
                }
            }
        }

        return time;
    }
}

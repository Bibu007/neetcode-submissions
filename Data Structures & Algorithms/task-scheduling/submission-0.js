class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let charArr = new Array(26).fill(0);
        let maxHeap = new MaxPriorityQueue();
        let q = new Queue();
        let time = 0;

        for(let i = 0; i < tasks.length; i++){
            charArr[tasks[i].charCodeAt(0) - 65]++;
        }

        for(let i = 0; i < charArr.length; i++){
            if(charArr[i] !== 0){
                maxHeap.enqueue(charArr[i]);
            }
        }

        while(maxHeap.size() > 0 || q.size() > 0){
            time++;

            if(maxHeap.size() > 0){
                let max = maxHeap.pop() - 1;
                if(max!==0){
                    q.push([max, time + n]);
                }
            }

            if(q.size() > 0 && q.front()[1] === time){
                    maxHeap.push(q.pop()[0]);     
            }
        }
        return time;
    }
}
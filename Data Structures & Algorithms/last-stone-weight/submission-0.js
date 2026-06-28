class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxHeap = new MaxPriorityQueue();

        for(const c of stones){
            maxHeap.enqueue(c);
        }

        console.log(maxHeap);

        while(maxHeap.size() > 1){
            let a = maxHeap.dequeue();
            let b = maxHeap.dequeue();

            let dif = a - b;

            if(dif !== 0){
                maxHeap.enqueue(dif);
            }
        }

        if(maxHeap.size() == 0){
            return 0;
        }
        else{
            return maxHeap.dequeue();
        }
    }
}

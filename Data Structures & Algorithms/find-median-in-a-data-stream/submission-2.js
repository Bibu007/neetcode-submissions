class MedianFinder {
    constructor() {
        this.maxHeap = new MaxPriorityQueue();
        this.minHeap = new MinPriorityQueue();
        this.count = 0;
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.count++; 
        if(this.minHeap.isEmpty() || num > this.minHeap.front()){
            this.minHeap.enqueue(num);
        }
        else{
            this.maxHeap.enqueue(num);
        }

        if(this.minHeap.size() > this.maxHeap.size() + 1){
            this.maxHeap.enqueue(this.minHeap.dequeue());
        }
        else if(this.maxHeap.size() > this.minHeap.size() + 1){
            this.minHeap.enqueue(this.maxHeap.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        let median = 0;
        if(this.count % 2 == 0){
            let a = this.maxHeap.front();
            let b = this.minHeap.front();
            median = (a + b)/2;
        }
        else{
            if(this.minHeap.size() > this.maxHeap.size()){
                median = this.minHeap.front();
            }
            else if(this.minHeap.size() < this.maxHeap.size()){
                median = this.maxHeap.front();
            }
        }
        return median;
    }
}

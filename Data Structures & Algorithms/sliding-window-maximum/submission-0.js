class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const maxPQ = new PriorityQueue((a, b) => b.value - a.value);
        let r = 0;
        let l = 0;
        let res = [];

        for(r=0; r<k; r++){
            let obj={};
            obj.value = nums[r];
            obj.index = r;

            maxPQ.enqueue(obj);
        }

        res.push(maxPQ.front().value);

        for(r=k; r<nums.length; r++){
            l++;
            let obj ={};
            obj.value = nums[r];
            obj.index = r;
            maxPQ.enqueue(obj);

            while(maxPQ.front().index>r || maxPQ.front().index<l){
                maxPQ.dequeue();
            }

            res.push(maxPQ.front().value);
        }

        return res;
    }
}

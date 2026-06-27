class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let frequency = {};
        let res = [];
        let ans = [];
        let bucket = new Array(nums.length + 1).fill(null);

        for(let i = 0; i < nums.length; i++){
            if(nums[i] in frequency){
                frequency[nums[i]]++;
            }
            else{
                frequency[nums[i]] = 1;
            }
        }

        console.log(frequency);

        for(let item in frequency){
            let temp = [Number(item)];
            if(bucket[frequency[item]] == null){
                bucket[frequency[item]] = temp;
            }
            else{
                bucket[frequency[item]].push(...temp);
            }
        }

        
        let j = 0;

        for(let i = nums.length; i > 0; i--){
            if(bucket[i] !== null && j < k){
                ans.push(...bucket[i]);
                j = j + bucket[i].length; 
            }
        }


        console.log(bucket);

        return ans;
    }
}

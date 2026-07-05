class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let frequencyMap = {};
        let m = 0;
        let res = [];

        for(let i = 0; i < nums.length; i++){
            if(nums[i] in frequencyMap){
                frequencyMap[nums[i]]++;
            }
            else{
                frequencyMap[nums[i]] = 1;
            }
        }

        console.log(frequencyMap);

        let bucket = new Array(nums.length + 1).fill(null);

        for(const c in frequencyMap){
            console.log(frequencyMap[c]);
            if(bucket[frequencyMap[c]] == null){
                let temp = [c];
                bucket[frequencyMap[c]] = temp;
            }
            else{
                bucket[frequencyMap[c]].push(c);
            }
        }

        for(let i = bucket.length - 1; i > 0; i--){
            if(bucket[i] !== null){
                res.push(...bucket[i]);
                m+=bucket[i].length;
                if(m==k){
                    break;
                }
            }
        }

        console.log(bucket);
        return res;
    }
}

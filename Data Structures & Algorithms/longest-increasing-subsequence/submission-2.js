class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let numsMap = new Map();

        for(let i = nums.length - 1; i >= 0; i--){
            let max = 0;
            for(const num of numsMap.keys()){
                //console.log(num);
                if(num > nums[i] && numsMap.get(num) > max){
                    max = numsMap.get(num);
                    //console.log(max);
                }
                
            }
            numsMap.set(nums[i], max + 1);
        }
        //console.log(numsMap);
        let max = 0;
        for(const num of numsMap.keys()){
            if(numsMap.get(num) > max){
                max = numsMap.get(num);
            }
        }
        return max;
    }
}

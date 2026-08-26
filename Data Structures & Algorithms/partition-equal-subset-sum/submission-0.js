class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let sum = 0;
        let target = 0;
        let sumSet = new Set();
        sumSet.add(0);
        for(const n of nums){
            sum = sum + n;
        }

        console.log(sum);

        if(sum % 2 != 0){
            return false;
        }
        else{
            target = sum / 2;
        }

        for(let i = nums.length - 1; i >= 0; i--){
            let newSet = new Set([...sumSet])
            for(const s of newSet){
                sumSet.add(nums[i] + s);
                if(nums[i] + s === target){
                    return true;
                }
            }
        }

        return false;
    }
}

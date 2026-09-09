class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = -Infinity;
        let sum = 0;

        for(let i = 0; i < nums.length; i++){
            max = Math.max(nums[i], nums[i] + sum, max);

            sum = Math.max(nums[i], nums[i] + sum);
        }

        return max;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let minMax = [1, 1];
        let max = nums[nums.length - 1];

        for (let i = nums.length - 1; i >= 0; i--) {
            max = Math.max(nums[i], nums[i] * minMax[0], nums[i] * minMax[1], max);

            let temp1 = Math.min(nums[i] * minMax[0], nums[i], nums[i] * minMax[1]);
            let temp2 = Math.max(nums[i] * minMax[1], nums[i], nums[i] * minMax[0]);

            minMax = [temp1, temp2];
        }

        return max;
    }
}

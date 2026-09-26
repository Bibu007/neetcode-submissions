class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = new Array(nums.length).fill(1);
        const suffix = new Array(nums.length).fill(1);

        let prod = 1;

        for (let i = 1; i < nums.length; i++) {
            prod = prod * nums[i - 1];
            prefix[i] = prod;
        }

        prod = 1;

        for (let i = nums.length - 2; i >= 0; i--) {
            prod = prod * nums[i + 1];
            suffix[i] = prod;
        }

        const res = new Array(nums.length).fill(1);

        for (let i = 0; i < nums.length; i++) {
            res[i] = prefix[i] * suffix[i];
        }

        return res;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const dp = new Map();

        return this.dfs(nums, dp, 0, 0, target);
    }

    dfs(nums, dp, index, total, target) {
        if (index >= nums.length) {
            if (total === target) {
                return 1;
            } else {
                return 0;
            }
        }

        const key = `${index}-${total}`;

        if (dp.has(key)) {
            return dp.get(key);
        }

        const result =
            this.dfs(nums, dp, index + 1, total + nums[index], target) +
            this.dfs(nums, dp, index + 1, total - nums[index], target);

        dp.set(key,result);
        return result;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const dp = new Map();
        return this.dfs(0, nums, dp);
    }

    dfs(index, nums, dp) {
        if (dp.has(index)) {
            return dp.get(index);
        }

        if (index >= nums.length - 1) {
            return true;
        }

        

        let res = false;

        for (let i = 1; i <= nums[index]; i++) {
            res = res || this.dfs(index + i, nums, dp);
        }

        dp.set(index, res);
        return res;
    }
}

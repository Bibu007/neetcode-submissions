class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let next = 0;
        let nextNext = 0;
        let current = 0;

        for(let i = nums.length - 1; i >= 0; i--){
            current = Math.max(nums[i] + nextNext, next);
            nextNext = next;
            next = current;
        }

        return current;
    }
}

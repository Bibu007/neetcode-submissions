class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let next = 0;
        let nextNext = 0;
        let current1 = 0;
        let current2 = 0;

        if(nums.length === 1){
            return nums[0];
        }

        for (let i = nums.length - 1; i >= 1; i--) {
            current1 = Math.max(nums[i] + nextNext, next);
            nextNext = next;
            next = current1;
        }

        next = 0;
        nextNext = 0;

        for (let i = nums.length - 2; i >= 0; i--) {
            current2 = Math.max(nums[i] + nextNext, next);
            nextNext = next;
            next = current2;
        }

        return Math.max(current1, current2);
    }
}

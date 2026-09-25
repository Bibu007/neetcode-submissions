class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const res = [];
        const numsMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            numsMap.set(nums[i], i);
        }

        console.log(numsMap);

        for (let i = 0; i < nums.length; i++) {
            if (numsMap.has(target - nums[i])) {
                if (i !== numsMap.get(target - nums[i])) {
                    return [i, numsMap.get(target - nums[i])];
                }
            }
        }
    }
}

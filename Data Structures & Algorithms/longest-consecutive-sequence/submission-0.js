class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxCount = 0;
        let numsSet = new Set(nums);

        for (let i = 0; i < nums.length; i++) {
            let count = 1;
            if (!numsSet.has(nums[i] - 1)) {
                let temp = nums[i];
                while (numsSet.has(temp + 1)) {
                    count += 1;
                    temp = temp + 1;
                }

                if (count > maxCount) {
                    maxCount = count ;
                }
            }
        }

        return maxCount;
    }
}

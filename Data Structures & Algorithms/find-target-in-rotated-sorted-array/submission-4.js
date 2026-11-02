class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const cut = this.findcut(nums);

        let l = 0;
        let r = nums.length - 1;
        let m = 0;

        if (target > nums[r]) {
            r = cut - 1;
        } else {
            l = cut;
        }

        while (l <= r) {
            m = Math.floor((l + r) / 2);

            if (nums[m] === target) {
                return m;
            }
            else if (nums[m] > target) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return - 1;
    }

    findcut(nums) {
        let l = 0;
        let r = nums.length - 1;

        let m = 0;

        while (l < r) {
            m = Math.floor((l + r) / 2);
            if (nums[m] > nums[r]) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        return l;
    }
}

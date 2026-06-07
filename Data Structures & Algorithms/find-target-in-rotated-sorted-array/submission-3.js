class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while(l<r){
            let m = l + Math.floor((r - l)/2);

            if(nums[m] > nums[r]){
                l = m + 1;
            }
            else{
                r = m;
            }
        }

        console.log(l);

        if(target == nums[l]){
            return l;
        }

        if(target > nums[l] && target <= nums[nums.length-1]){
            r = nums.length - 1;
        }
        else{
            r = l - 1;
            l=0;
        }

        while(l<=r){
            let m = l + Math.floor((r - l)/2);
            if(nums[m] == target){
                return m;
            }
            if(nums[m] < target){
                l = m + 1;
            }
            else{
                r = m - 1;
            }
        }
        return -1;
    }
}

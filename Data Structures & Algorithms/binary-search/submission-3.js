class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let high = nums.length - 1;
        let low = 0;

        while((low<=high)){
            if(nums[Math.floor(high-low/2)]==target){
                return Math.floor(high-low/2);
            }

            else if(nums[Math.floor(high-low/2)]>target){
                high = Math.floor(high-low/2)-1;
            }

            else if(nums[Math.floor(high-low/2)]<target){
                low = Math.floor(high-low/2)+1;
            }
        }
        /*
        if(low==high){
            if(nums[low]==target){
                return low;
            }
        }
        */
        return -1;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0;
        let fast = 0;

        while(true){
            slow = nums[slow];
            fast = nums[nums[fast]];

            if(nums[slow] == nums[fast]){
                slow = 0;
                break;
            }
            
        }

        while(true){
            slow = nums[slow];
            fast = nums[fast];

            if(slow == fast){
                return slow;
            }
        }
    }
}

class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let nums = [];
        nums = matrix.reduce(function(acc,item) {
            return acc.concat(item);
        },[]);
        //console.log(newArray);

        let high = nums.length - 1;
        let low = 0;

        while((low<=high)){
            if(nums[Math.floor(high-low/2)]==target){
                return true;
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
        return false;

    }
}

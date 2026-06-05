class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    binarySearch(range,l,h,t){
        if(l>h){return -1;}

        let m = Math.floor(l + (h - l) / 2);

        if(range[m]==t){return m;}

        if (range[m] < t) {
            l = m + 1;
        } 
        else {
            h = m - 1;
        }

        return this.binarySearch(range,l,h,t);

    }

    search(nums, target) {
        return this.binarySearch(nums,0,nums.length-1,target);
    }
}

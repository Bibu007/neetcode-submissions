class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
    let right = numbers.length-1;

    while(left<right){
        if(numbers[left]+numbers[right]==target){
            let res = [left+1,right+1];
            return res;
        }
        if(numbers[left]+numbers[right]>target){
            right=right-1;
        }
        if(numbers[left]+numbers[right]<target){
            left=left+1;
        }
    }
    }
}

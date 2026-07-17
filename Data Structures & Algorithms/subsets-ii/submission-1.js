class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let res = [];
        let n = nums.length;
        let a = [];
        let k = 0;
        nums = nums.sort((a,b) => a - b);

        this.backtrack(a,k,n,res,nums);

        return res;
    }

    backtrack(a,k,n,res,nums){
        if(k === n){
            let temp = [];
            for(let i = 0; i < k; i++){
                if(a[i][1] === true){
                    temp.push(a[i][0]);
                }
            }
            res.push(temp);
        }
        else{
            let c = [[nums[k],true], [nums[k],false]];

            if(k > 0){
                if(nums[k] === a[k - 1][0] && a[k-1][1] === false){
                    c = [[nums[k], false]];
                }
            }
            for(let i = 0; i < c.length; i++){
                a[k] = c[i];
                this.backtrack(a,k+1,n,res,nums);
            }
        }
    }
}

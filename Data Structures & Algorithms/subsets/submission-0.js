class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [];
        let n = nums.length;
        let a = new Array(100).fill(null);
        let k = 0;

        this.backtrack(a,k,n,res,nums);

        return res;
    }

    backtrack(a,k,n,res,nums){
        k = k + 1;

        if(k === n + 1){
            let temp = [];
            for(let i = 1; i < k; i++){
                if(a[i] == true){
                    temp.push(nums[i-1]);
                }
            }
            res.push(temp);
        }
        else{
            let c = [true, false];

            for(let i = 0; i < c.length; i++){
                a[k] = c[i];
                this.backtrack(a,k,n,res,nums);
            }
        }
    }
}

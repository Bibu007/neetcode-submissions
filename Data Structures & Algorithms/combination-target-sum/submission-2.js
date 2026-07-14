class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let a = [];
        let k = 0;
        let res = [];

        this.backtrack(a,k,nums,target,res);
        return res;
    }

    backtrack(a,k,nums,target,res){
        if(this.is_a_solution(a,k,target)){
            let temp = [];
            for(let i=0; i<k; i++){
                temp.push(a[i]);
            }
            res.push(temp);
        }
        else{
            let c = this.construct_candidates(a,k,nums,target);
            for(let i = 0; i < c.length; i++){
                a[k] = c[i];
                this.backtrack(a,k+1,nums,target,res);
            }
        }
    }

    is_a_solution(a,k,target){
        let sum = 0;
        for(let i =0; i< k; i++){
            sum = sum + a[i];
        }
        if(sum === target){
            return true;
        }
        else{
            return false;
        }
    }

    construct_candidates(a,k,nums,target){
        let c = [];
        let sum = 0;

        for(let i = 0; i < k; i++){
            sum = sum + a[i];
        }

        for(let j = 0; j < nums.length; j++){
            if(k > 0 && nums[j] < a[k-1]){
                continue;
            }
            if(sum + nums[j] <= target){
                c.push(nums[j]);
            }
        }

        return c;
    }
}

class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(nums1, target) {
        let a = [];
        let k = 0;
        let res = [];
        let nums2 = nums1.sort((a,b) => a - b); 
        let nums = [];

        for(let i = 0; i < nums2.length; i++){
            let temp = [];
            temp.push(nums2[i]);
            temp.push(i);
            nums.push(temp);
        }

        console.log(nums);

        this.backtrack(a,k,nums,target,res);

        return res;
    }

    backtrack(a,k,nums,target,res){
        if(this.is_a_solution(a,target,k)){
            let temp = [];
            for(let i = 0; i < k; i++){
                temp.push(a[i][0]);
            }
            res.push(temp);
        }
        else{

            let c = this.construct_candidates(a,k,nums,target,res);

            for(let i = 0; i < c.length; i++){
                a[k] = c[i];
                this.backtrack(a,k+1,nums,target,res)
            } 
        }
    }

    is_a_solution(a,target,k){
        let sum = 0;
        for(let i = 0; i < k; i++){
            sum = sum + a[i][0];
        }
        if(sum === target){
            return true;
        }
        else{
            return false;
        }
    }

    construct_candidates(a,k,nums,target,res){
        let c = [];
        let sum = 0;
        for(let i = 0; i < k; i++){
            sum = sum + a[i][0];
        }

        //console.log(`Sum = ${sum}`);
        //console.log(`a = ${a}`);
        console.log(`k = ${k}`);

        for(let i = 0; i < nums.length; i++){
            if(c.length !== 0 && nums[i][0] === c[c.length-1][0]){
                continue;
            }
            if(sum + nums[i][0] <= target){
                if(k > 0){
                    if(nums[i][1] > a[k-1][1]){
                        let temp = [];
                        for(let j = 0; j < 2; j++){
                            temp.push(nums[i][j]);
                        }
                        c.push(temp);
                    }
                }
                else{
                        let temp = [];
                        for(let j = 0; j < 2; j++){
                            temp.push(nums[i][j]);
                        }
                    c.push(nums[i]);
                }
            }
        }
        

        //console.log(a);

        return c;
    }
}

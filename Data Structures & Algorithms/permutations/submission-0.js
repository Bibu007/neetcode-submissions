class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let a = [];
        let k = 0;
        //let c = nums;
        let n = nums.length;
        let res = [];
        //let c = this.construct_candidates(a,k,nums,n);

        this.backtrack(a,k,nums,n,res);
        return res;
    }

    backtrack(a,k,nums,n, res){
        //console.log(`${a} & k=${k}`);
        if(k === n){
            res.push([...a]);
            //a.pop();
        }
        else{
            let c = this.construct_candidates(a,k,nums,n);
            //console.log(c);
            for(let i = 0; i < c.length; i++){
                a[k] = c[i];
                this.backtrack(a,k+1,nums,n,res);
            }
        }
    }

    construct_candidates(a,k,nums,n){
        /*let IN_PERM = new Array(10).fill(false);
        for(let i = 0; i < k; i++){
            IN_PERM[a[i]] = true;
        }
        */
        //let l = n - k;
        let c = [];
        let aMap = {};

        for(let i = 0; i < k; i++){
            aMap[a[i]] = 0;
        }

        for(let j = 0; j < nums.length; j++){
            if(!(nums[j] in aMap)){
                c.push(nums[j]);
            }
        }

        return c;
    }
}

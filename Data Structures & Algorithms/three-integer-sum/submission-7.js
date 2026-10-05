class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        nums = nums.sort((a,b) => a - b);
        

        for(let i = 0; i < nums.length - 2; i++){
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let j = i + 1;
            let k = nums.length - 1;
           

            while(j < k){
                let temp = nums[i] + nums[j]+ nums[k];
                if (temp < 0){
                    j+=1;
                }
                else if(temp > 0){
                    k-=1;
                }
                else if(temp === 0){
                    res.push([nums[i], nums[j], nums[k]]);
                    
                    j+=1;
                    k-=1;
                    while (j < k && nums[j] === nums[j - 1]) {
                        j++;
                    }
                }
                
            }
        }

        return res;
        
    }
}

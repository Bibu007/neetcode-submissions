class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = [];
        let s = [];
        nums = nums.sort((a,b)=>a-b);
        //console.log(nums);
        for(let i=0; i<nums.length-2; i++){
            if(nums[i]===nums[i-1]){continue;}
            let j = i + 1;
            let k = nums.length - 1;

            while(j<k){
                //console.log(nums[j] + nums[k] == -nums[i]);
                //console.log(`${nums[j] + nums[k]} ${-nums[i]}`)
                if(nums[j] + nums[k] == -nums[i]){
                    let arr = [nums[i], nums[j], nums[k]];
                    //let str = `${nums[j]}${nums[k]}${nums[i]}`
                    //if(!s.includes(str)){
                    //s.push(str);
                    res.push(arr);
                    //}
                    j=j+1;
                    k=k-1;
                    while (j < k && nums[j] === nums[j - 1]) j++;
                    while (j < k && nums[k] === nums[k + 1]) k--;
                }
                else if(nums[j] + nums[k] < -nums[i]){
                    j = j + 1;
                    while(j<k && nums[j]===nums[j-1]){
                        j=j+1;
                    }
                }
                else if(nums[j] + nums[k] > -nums[i]){
                    k = k - 1;
                    while(j<k && nums[k]===nums[k+1]){
                        k=k-1;
                    }
                }
            }
        }
        return res;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let res = [];
        let sol = [];
        console.log(this.isPalindrome(""));
        this.backtrack(s,0,res,sol);
        return sol;
    }

    backtrack(s,start,res,sol){

        if(start >= s.length){
            sol.push([...res]);
        }

        let i = start;
        let j = start;

        for(i = start; i < s.length; i++){
            let temp = s.slice(j,i+1);
            if(this.isPalindrome(temp)){
                res.push(temp);
                this.backtrack(s,i+1,res,sol);
                res.pop();
            }
        }
    }

    isPalindrome(s){
        if(s === ""){
            return false;
        }
        let i = 0;
        let j = s.length - 1;

        while(i < j){
            if(s[i] !== s[j]){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}

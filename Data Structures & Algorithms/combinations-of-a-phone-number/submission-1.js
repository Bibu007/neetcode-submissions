class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        let digitMap = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz",
        }
        let res = [];
        let a = [];

        this.backtrack(digits,digitMap,0,res,a);

        return res;
    }

    backtrack(digits,digitMap,k,res,a){
        if(digits.length === 0){
            return;
        }
        if(k === digits.length){
            let temp = "";
            for(let i = 0; i < k; i++){
                temp = temp + a[i];
            }
            res.push(temp);
            return;
        }

        console.log(digitMap[digits[k]][0]);

        for(let i = 0; i < digitMap[digits[k]].length; i++){
            a[k] = digitMap[digits[k]][i];
            this.backtrack(digits,digitMap,k+1,res,a);
        }
    }
}

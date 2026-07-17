class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let a = "";
        let open = 0;
        let close = 0;
        let res = [];

        this.backtrack(open,close,res,a,n);

        return res;
    }

    backtrack(open,close,res,a,n){
        //console.log(a);
        //console.log(a.length);
        //console.log(2*n);
        if(open === n && close === n){
            res.push(a);
            return;
        }
        if(open < n){
            this.backtrack(open+1,close,res,a + "(",n);
        }
        if(close < open){
            this.backtrack(open,close+1,res,a + ")",n);
        }
    }
    /*
    construct_candidates(a,k,n,open,close){
        let c = [];
        if(open < n){
            c.push("(");
            c.push(")");
        }
        else if(close < n){
            c.push(")");
        }
        //console.log(a);
        return c;
    }
    */
}

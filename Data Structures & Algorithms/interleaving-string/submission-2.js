class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        let sum1 = 0;
        let sum2 = 0;
        let sum3 = 0;
        const dp = new Map();

        for(let i = 0; i < s1.length; i++){
            sum1 += s1.charCodeAt(i);
        }

        for(let i = 0; i < s2.length; i++){
            sum2 += s2.charCodeAt(i);
        }

        for(let i = 0; i < s3.length; i++){
            sum3 += s3.charCodeAt(i);
        }

        if(sum1 + sum2 !== sum3){
            return false;
        }

        return this.dfs(s1, s2, s3, 0, 0, 0, dp);
    }

    dfs(s1, s2, s3, i1, i2, i3, dp) {
        let res1 = false;
        let res2 = false;

        const key = `${i1}-${i2}-${i3}`;
        if (i3 >= s3.length) {
            return true;
        }

        if(dp.has(key)){
            return dp.get(key);
        }

        if (s1[i1] === s3[i3]) {
            res1 = this.dfs(s1, s2, s3, i1 + 1, i2, i3 + 1, dp);
        }

        if (s2[i2] === s3[i3]) {
            res2 = this.dfs(s1, s2, s3, i1, i2 + 1, i3 + 1, dp);
        }

        dp.set(key, res1 || res2 || false)

        return (res1 || res2 || false);
    }
}

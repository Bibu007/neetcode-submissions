class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const dp = new Map();
        return this.dfs(amount, coins, 0, 0, dp);
    }

    dfs(amount, coins, a, i, dp){
        if(a === amount){
            return 1;
        }

        if(a > amount || i === coins.length){
            return 0;
        }

        const key = `${a}-${i}`;

        if(dp.has(key)){
            return dp.get(key);
        }

        let res;

        res = this.dfs(amount, coins, a, i + 1, dp)
        res = res + this.dfs(amount, coins, a + coins[i], i, dp);

        dp.set(key, res);
        return res;
    }
}

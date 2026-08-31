class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const dp = new Map();
        return this.dfs(0, true, prices, dp);
    }

    dfs(i, buying, prices, dp) {
        if(i >= prices.length){
            return 0;
        }

        const key = `${i} - ${buying}`

        if(dp.has(key)){
            return dp.get(key);
        }

        let cooldown = this.dfs(i + 1, buying, prices, dp);

        let result;

        if(buying){
            let buy = this.dfs(i + 1, !buying, prices, dp) - prices[i];
            result = Math.max(buy,cooldown);
        }
        else{
            let sell = this.dfs(i + 2, !buying, prices, dp) + prices[i];
            result = Math.max(sell,cooldown);
        }

        dp.set(key, result);
        return result;
    }
}

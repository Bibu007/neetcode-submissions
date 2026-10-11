class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0;
        let j = 1;
        let max = 0;

        if (prices.length === 1) {
            return 0;
        }

        while (j < prices.length) {
            if (prices[i] > prices[j]) {
                i = j;
                j += 1;
            } else {
                let profit = prices[j] - prices[i];
                max = Math.max(profit, max);
                j += 1;
            }
        }

        return max;
    }
}

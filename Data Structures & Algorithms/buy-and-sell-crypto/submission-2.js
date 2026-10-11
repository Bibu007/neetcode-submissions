class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0;
        let j = 1;
        let max = 0;
        const len = prices.length;
        let profit = 0;

        if (len === 1) {
            return 0;
        }

        while (j < len) {
            if (prices[i] > prices[j]) {
                i = j;
                j += 1;
            } else {
                profit = prices[j] - prices[i];
                max = Math.max(profit, max);
                j += 1;
            }
        }

        return max;
    }
}

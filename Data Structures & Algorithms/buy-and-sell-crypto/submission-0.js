class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = Infinity;
        let maxProfit = 0;
        let n = prices.length;

        for(let i=1; i<n; i++){
            if(prices[i-1]<min){
                min = prices[i-1];
                console.log(min);
            }
            let diff = prices[i] - min;

            if(!(diff >= 0)){
                continue;
            }

            if(diff>maxProfit){
                maxProfit = diff;
            }
        }

        return maxProfit;
    }
}

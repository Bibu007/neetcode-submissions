class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let res = new Array(amount + 1).fill(amount + 1);
        res[0] = 0;

        //console.log(res);
        for (let i = 1; i <= amount; i++) {
            for (let j = 0; j < coins.length; j++) {
                if (coins[j] <= i) {
                    res[i] = Math.min(res[i - coins[j]] + 1, res[i]);
                }
            }
        }

        if(res[amount] === amount+1){
            return -1;
        }
        return res[amount];
    }
}

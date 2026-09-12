class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let gasSum = 0;
        let costSum = 0;
        for (const g of gas) {
            gasSum = gasSum + g;
        }
        for (const c of cost) {
            costSum = costSum + c;
        }

        if (costSum > gasSum) {
            return -1;
        }
        let totalCost = 0;
        let start = 0;
        for (let i = 0; i < gas.length; i++) {
            totalCost = totalCost + gas[i] - cost[i];

            if (totalCost < 0) {
                totalCost = 0;
                start = i + 1;
            }
        }
        return totalCost >= 0 ? start : -1;
    }
}

class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        const gasSum = gas.reduce((acc, cur) => (acc += cur), 0);
        const costSum = cost.reduce((acc, cur) => (acc += cur), 0);

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

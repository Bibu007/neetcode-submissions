class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const rows = coins.length + 1;
        const cols = amount + 1;
        const grid = Array.from({ length: rows }, () => new Array(cols).fill(0));

        for (let i = 0; i < rows; i++) {
            grid[i][0] = 1;
        }

        for (let i = 1; i < rows; i++) {
            for (let j = 1; j < cols; j++) {
                if(i - 1 >= 0){
                    grid[i][j] = grid[i][j] + grid[i-1][j];
                }
                if((j - coins[i-1]) >=0){
                    grid[i][j] = grid[i][j] + grid[i][j - coins[i-1]];
                }
            }
        }

        return grid[rows - 1][cols - 1];
    }
}

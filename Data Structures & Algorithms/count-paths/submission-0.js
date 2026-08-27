class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const grid = Array.from({ length: m }, () => new Array(n).fill(0));
        grid[m - 1][n - 1] = 1;
        for (let i = m - 1; i >= 0; i--) {
            for (let j = n - 1; j >= 0; j--) {
                console.log("Hey");
                if (j + 1 < n) {
                    grid[i][j] = grid[i][j] + grid[i][j + 1];
                }
                if (i + 1 < m) {
                    grid[i][j] = grid[i + 1][j] + grid[i][j];
                }
            }
        }

        return grid[0][0];
    }
}

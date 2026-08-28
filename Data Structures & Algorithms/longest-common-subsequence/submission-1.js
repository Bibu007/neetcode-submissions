class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const m = text1.length;
        const n = text2.length;
        let grid = Array.from({ length: n }, () => new Array(m).fill(0));
        let temp = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (text2[i] === text1[j]) {
                    if (i - 1 >= 0 && j - 1 >= 0) {
                        temp = grid[i - 1][j - 1];
                    }
                    grid[i][j] = 1 + temp;
                    temp = 0;
                } else {
                    let r = 0;
                    let c = 0;
                    if (i - 1 >= 0) {
                        r = grid[i - 1][j];
                    }
                    if (j - 1 >= 0) {
                        c = grid[i][j - 1];
                    }
                    grid[i][j] = Math.max(r, c);
                }
            }
        }

        return grid[n - 1][m - 1];
    }
}

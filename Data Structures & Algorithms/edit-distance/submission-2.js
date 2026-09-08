class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const m = word1.length;
        const n = word2.length;
        const dp = new Map();

        return this.dfs(word1, word2, m, n, 0, 0, dp);
    }

    dfs(word1, word2, m, n, i, j, dp) {
        if (i === m) {
            return n - j;
        }
        if (j === n) {
            return m - i;
        }
        const key = `${i}-${j}`;

        if (dp.has(key)) {
            return dp.get(key);
        }

        if (word1[i] === word2[j]) {
            dp.set(key, this.dfs(word1, word2, m, n, i + 1, j + 1, dp));
        }
    else{
        let res = Math.min(
            this.dfs(word1, word2, m, n, i, j + 1, dp),
            this.dfs(word1, word2, m, n, i + 1, j, dp),
        );

        dp.set(key, 1 + Math.min(res, this.dfs(word1, word2, m, n, i + 1, j + 1, dp)));
    }
        return dp.get(key);
    }
    
}

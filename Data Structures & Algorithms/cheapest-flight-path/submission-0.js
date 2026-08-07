class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, edges, src, dst, K) {
        // 1. Initialize 3D DP array with Infinity
        // Dimensions: (K + 2) states x n nodes x n nodes
        // K stops means we can use up to K+1 transitions/edges safely
        const dp = Array.from({ length: K + 2 }, () =>
            Array.from({ length: n }, () => Array(n).fill(Infinity)),
        );

        // 2. Base Case: 0 intermediate stops (direct connections only)
        for (let i = 0; i < n; i++) {
            dp[0][i][i] = 0;
        }
        for (const [u, v, weight] of edges) {
            dp[0][u][v] = weight;
        }

        // 3. Populate DP table for 1 to K allowed stops
        for (let s = 1; s <= K; s++) {
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    // Option A: Do not use an extra stop (keep previous best)
                    dp[s][i][j] = dp[s - 1][i][j];

                    // Option B: Try every possible node 'k' as the s-th stop
                    for (let k = 0; k < n; k++) {
                        if (dp[s - 1][i][k] !== Infinity && dp[0][k][j] !== Infinity) {
                            dp[s][i][j] = Math.min(dp[s][i][j], dp[s - 1][i][k] + dp[0][k][j]);
                        }
                    }
                }
            }
        }

        // Return the result from src to dst with up to K stops
        return dp[K][src][dst] === Infinity ? -1 : dp[K][src][dst];
    }

    floydWarshallWithKStops(n, edges, src, dst, K) {
        // 1. Initialize 3D DP array with Infinity
        // Dimensions: (K + 2) states x n nodes x n nodes
        // K stops means we can use up to K+1 transitions/edges safely
        const dp = Array.from({ length: K + 2 }, () =>
            Array.from({ length: n }, () => Array(n).fill(Infinity)),
        );

        // 2. Base Case: 0 intermediate stops (direct connections only)
        for (let i = 0; i < n; i++) {
            dp[0][i][i] = 0;
        }
        for (const [u, v, weight] of edges) {
            dp[0][u][v] = weight;
        }

        // 3. Populate DP table for 1 to K allowed stops
        for (let s = 1; s <= K; s++) {
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    // Option A: Do not use an extra stop (keep previous best)
                    dp[s][i][j] = dp[s - 1][i][j];

                    // Option B: Try every possible node 'k' as the s-th stop
                    for (let k = 0; k < n; k++) {
                        if (dp[s - 1][i][k] !== Infinity && dp[0][k][j] !== Infinity) {
                            dp[s][i][j] = Math.min(dp[s][i][j], dp[s - 1][i][k] + dp[0][k][j]);
                        }
                    }
                }
            }
        }

        // Return the result from src to dst with up to K stops
        return dp[K][src][dst] === Infinity ? -1 : dp[K][src][dst];
    }
}

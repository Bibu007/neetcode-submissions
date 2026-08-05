class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        let adj = {};
        let n = points.length;

        for (let i = 0; i < n; i++) {
            adj[i] = [];
        }

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                let d =
                    Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
                adj[i].push([j, d]);
                adj[j].push([i, d]);
            }
        }

        const distance = new Array(n).fill(Infinity);
        const intree = new Array(n).fill(false);

        let v = 0;
        distance[v] = 0;

        while (!intree[v]) {
            intree[v] = true;

            for (const c of adj[v]) {
                if (distance[c[0]] > c[1] && intree[c[0]] === false) {
                    distance[c[0]] = c[1];
                }
            }

            let minDist = Infinity;

            for (let i = 0; i < n; i++) {
                if (distance[i] < minDist && intree[i] === false) {
                    minDist = distance[i];
                    v = i;
                }
            }
        }

        let res = 0;

        for (let i = 0; i < n; i++) {
            res = res + distance[i];
        }

        return res;
    }
}

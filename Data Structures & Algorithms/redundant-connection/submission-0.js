class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const len = edges.length + 1;
        const adj = Array.from({ length: len }, () => new Array());

        let degrees = new Array(len).fill(-1);
        let q = [];

        for (const e of edges) {
            adj[e[0]].push(e[1]);
            adj[e[1]].push(e[0]);
        }

        for (let i = 0; i < len; i++) {
            degrees[i] = adj[i].length;
        }

        for (let i = 1; i < degrees.length; i++) {
            if (degrees[i] === 1) {
                q.push(i);
            }
        }

        while (q.length !== 0) {
            let temp = q.shift();
            for (const a of adj[temp]) {
                degrees[a]--;
                if (degrees[a] === 1) {
                    q.push(a);
                }
            }
        }

        for (let i = edges.length - 1; i > 0; i--) {
            if (degrees[edges[i][0]] > 1 && degrees[edges[i][1]] > 1) {
                return edges[i];
            }
        }
    }
}

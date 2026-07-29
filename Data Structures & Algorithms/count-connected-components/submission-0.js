class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adj = Array.from({ length: n }, () => new Array());
        const dis = new Array(n).fill(false);
        let count = 0;

        console.log(dis);

        for (const c of edges) {
            adj[c[0]].push(c[1]);
            adj[c[1]].push(c[0]);
        }

        for (let i = 0; i < n; i++) {
            if (dis[i] === false) {
                count++;
                this.bfs(adj, i, dis);
            }
        }
        return count
    }

    bfs(adj, i, dis){
        let q = [];
        q.push(i);
        dis[i] = true;

        while(q.length !== 0){
            let t = q.shift();
            for(const c of adj[t]){
                if(dis[c] === false){
                    dis[c] = true;
                    q.push(c);
                }
            }
        }
    }
}

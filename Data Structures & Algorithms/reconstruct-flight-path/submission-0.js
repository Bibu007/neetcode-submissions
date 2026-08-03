class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        const adj = {};
        const res = ["JFK"];

        for (const t of tickets) {
            if (!adj[t[0]]) {
                adj[t[0]] = [];
            }
            if (!adj[t[1]]) {
                adj[t[1]] = [];
            }

            adj[t[0]].push(t[1]);
        }

        for (const a in adj) {
            adj[a].sort();
        }

        this.dfs("JFK", res, adj, tickets);

        return res;
    }

    dfs(v, res, adj, tickets) {
        if (res.length === tickets.length + 1) {
            return true;
        }
        if (adj[v].length === 0) {
            return false;
        }

        for (let i = 0; i < adj[v].length; i++) {
            let temp = adj[v][i];
            adj[v].splice(i, 1);
            res.push(temp);
            if (this.dfs(temp, res, adj, tickets)) {
                return true;
            }
            res.pop();
            adj[v].splice(i, 0, temp);
        }
        return false;
    }
}

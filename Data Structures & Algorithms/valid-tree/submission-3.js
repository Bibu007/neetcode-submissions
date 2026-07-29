class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let adj = Array.from({length: n}, () => new Array().fill([]));
        let dis = new Array(n).fill(false);
        let parent = new Array(n).fill(-1);
        //let processed = new Array(n).fill(false);

        for(const e of edges){
            adj[e[0]].push(e[1]);
            adj[e[1]].push(e[0]);
        }
        
        if(this.dfs(adj,dis,parent,0) === false){
            return false;
        }
        for(const c of dis){
            if(c === false){
                return false;
            }
        }
        return true;
    }

    dfs(adj,dis,parent,v){
        dis[v] = true;
        for(const c of adj[v]){
            if(dis[c] === false){
                parent[c] = v;
                if(!this.dfs(adj,dis,parent,c)){return false;}
            }
            else if(parent[v] !== c){
                return false;
            }
        }
        //processed[v] = true;
        return true;
        //console.log(dis);
        //return true;
    }
}

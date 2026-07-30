class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        console.log(edges.length);
        let len = edges.length + 1;
        let p = new Array(len).fill(0).map((item,index) => index);
        let size = new Array(len).fill(1);

        for(const e of edges){
            if(this.union(p,e[0],e[1],size)){
                return e;
            }
        }

        console.log(p)
    }

    find(p,v){
        if(p[v] === v){
            return v;
        }
        else{
            return this.find(p,p[v])
        }
    }

    union(p,u,v,size){
        const r1 = this.find(p,u);
        const r2 = this.find(p,v);
        if(r1 === r2){
            return true;
        }
        if(size[r1] >= size [r2]){
            size[r1]+=1;
            p[r2] = r1;
        }
        if(size[r2] > size[r1]){
            size[r2]+=1;
            p[r1] = r2;
        }
        return false;
    }
}

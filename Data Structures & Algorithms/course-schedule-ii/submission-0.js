class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let adj = Array.from({length:numCourses} , () => new Array(0));
        let indegrees = new Array(numCourses).fill(0);
        let q = [];
        let stack = [];
        let count = 0;

        for(let p of prerequisites){
            adj[p[1]].push(p[0]);
        }

        for(let a of adj){
            if(a.length === 0){
                continue;
            }

            for(let i = 0; i < a.length; i++){
                indegrees[a[i]]++;
            }
        }

        for(let i = 0; i < numCourses; i++){
            if(indegrees[i] === 0){
                q.push(i)
            }
        }

        while(q.length !== 0){
            count++;
            let temp = q.shift();
            stack.push(temp);

            for(let i = 0; i < adj[temp].length; i++){
                indegrees[adj[temp][i]]-=1;
                if(indegrees[adj[temp][i]] === 0){
                    q.push(adj[temp][i]);
                }
            }
        }

        if(count === numCourses){
            return stack;
        }

        return [];
    }
}


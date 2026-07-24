/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node){return null;}
        let nodeMap = new Map();
        this.dfs(node, nodeMap);
        return nodeMap.get(node);
    }

    dfs(node, nodeMap){
        if(node === null){
            return null;
        }

        if(nodeMap.has(node)){
            return nodeMap.get(node);
        }

        let copy = new Node();
        copy.val = node.val;

        nodeMap.set(node,copy)

        for(const n of node.neighbors){
            copy.neighbors.push(this.dfs(n, nodeMap));
        }

        return copy;
    }
}

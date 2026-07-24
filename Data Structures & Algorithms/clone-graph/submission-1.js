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
        let nodeMap = new Map();
        return this.dfs(node, nodeMap);   
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

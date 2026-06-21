/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        let q = [];
        let res = [];

        q.push(root);

        while(q.length !== 0){
            let last = 0;
            let len = q.length;

            for(let i = 0 ; i < len; i++){
                let node = q.shift();
                if(node){
                last = node.val;
                q.push(node.left);
                q.push(node.right);
                }
            }
            if(last !== 0){res.push(last)};
        }
        return res;
    }
}

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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        return this.isSame(p,q) >= 0;
    }

    isSame(p,q){
        if (p == null && q == null){
            return 1;
        }
        else if(p == null || q == null){
            return -1;
        }

        let left = this.isSame(p.left, q.left);
        let right = this.isSame(p.right, q.right);

        if(left == -1 || right == -1 || p.val !== q.val){
            return -1;
        }

        return 1;
    }
}

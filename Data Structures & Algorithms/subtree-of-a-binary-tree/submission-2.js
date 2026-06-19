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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(subRoot==null){return true;}
        if(root == null){
            return false;
        }

        let left = this.isSubtree(root.left, subRoot);
        let right = this.isSubtree(root.right, subRoot);

        if(left == true || right == true || this.isSameTree(root, subRoot) == true ){
            return true;
        }

        return false;
    }

    isSameTree(p, q) {
        if (p == null && q == null) return true;
        if (p == null || q == null) return false;
        if (p.val !== q.val) return false;

        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}

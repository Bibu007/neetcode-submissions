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
     * @return {number}
     */
    maxPathSum(root) {
        let res = [-Infinity];
        this.pathSum(root, res);
        return res[0];
    }

    pathSum(root, res){
        if(root == null){
            return 0;
        }

        let left = this.pathSum(root.left, res);
        let right = this.pathSum(root.right, res);

        let sum1 = Math.max(root.val, root.val + Math.max(left, right));
        let sum2 = Math.max(root.val, root.val + left, root.val + right, root.val + left + right);

        if(sum2 > res[0]){
            res[0] = sum2;
        }

        return sum1;
    }
}

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

    diameterOfBinaryTree(root){
        let res = [0];
        this.diameter(root, res);
        return res[0];
    }

    diameter(root, res) {

        if(root == null){
            return 0;
        }

        let left = this.diameter(root.left, res);
        let right = this.diameter(root.right, res);

        let diameter = left + right;

        res[0] =  Math.max(res[0], diameter);

        return 1 + Math.max(left,right);
    }
}

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
     * @return {TreeNode}
     */
    invertTree(root) {

        if(root){
            this.invertTree(root.left);
            this.invert(root);
            this.invertTree(root.left);
        }

        return root;
    }

    invert(root){
        if(root.left || root.right){
            let temp = root.left;
            root.left = root.right;
            root.right = temp;
        }
    }

}
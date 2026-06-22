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
     * @return {boolean}
     */
    isValidBST(root) {
        let lower = -Infinity;
        let upper = Infinity;
        return this.valid(root, lower, upper) >= 0;
    }

    valid(root, lower, upper){
        if(root == null){
            return 0;
        }

        if(root.val > lower && root.val < upper){
            let left = this.valid(root.left, lower, root.val);
            let right = this.valid(root.right, root.val, upper);

            if(left == -1 || right == -1){
                return -1;
            }
            else{
                return 1;
            }
        }
        else{
            return -1;
        }
    }
}

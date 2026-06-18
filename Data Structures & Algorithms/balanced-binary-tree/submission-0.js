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
    isBalanced(root) {
        let res = [true];
        this.balanced(root, res);
        return res[0];
    }

    balanced(root, res){
        if(root == null){
            return 0;
        }

        let left = this.balanced(root.left, res);
        let right = this.balanced(root.right, res);

        if(res[0] == false){
            return;
        }

        Math.abs(left - right) <= 1 ?  res[0] = true : res[0] = false;

        if(res[0] == false){
            return;
        }

        return 1 + Math.max(left, right);

    }
}

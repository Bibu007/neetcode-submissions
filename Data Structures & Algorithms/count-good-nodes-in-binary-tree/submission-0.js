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
    goodNodes(root) {
        let num = -Infinity;
        let count = 0;
        return this.countGoodNodes(root, num);
    }

    countGoodNodes(root, num){
        if(root == null){
            return 0;
        }
        let count = 0;

        if(root.val >= num){
            num = root.val;
            count = 1;
        }

        let left = this.countGoodNodes(root.left, num);
        let right = this.countGoodNodes(root.right, num);

        count = count + left + right;

        return count;
    }
}

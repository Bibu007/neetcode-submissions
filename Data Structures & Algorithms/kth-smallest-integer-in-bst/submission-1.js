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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let temp = [k,0];
        this.kSmall(root, temp);
        return temp [1];
    }

    kSmall(root, temp){
        if(root == null){
            return 0;
        }
        this.kSmall(root.left, temp);

        if(temp[0] == 0){
            return 0;
        }
        else{
            temp[0]--;
            if(temp[0] == 0){
                temp[1] = root.val;
            }
        }

        this.kSmall(root.right, temp);
    }
}

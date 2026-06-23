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
        let ans = [0];
        this.kSmall(root, k, ans);
        return ans[0];
    }

    kSmall(root, k, ans){
        if(root){
            let left = this.kSmall(root.left, k, ans);
            if(left == 0){
                return 0;
            }
            else{
                left -= 1;
                k = left;
            }

            if(k==0){
                ans[0] = root.val;
                return 0;
            }

            let right = this.kSmall(root.right, k, ans)
            if(right == 0){
                return 0;
            }
            else{
                return right;
            }

        }
        else{
            return k;
        }
    }
}

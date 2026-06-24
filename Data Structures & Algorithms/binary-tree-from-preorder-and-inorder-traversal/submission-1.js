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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let inorderMap = {};
        let l = inorder.length;
        
        for(let i = 0; i < l; i++){
            inorderMap[inorder[i]] = i;
        }

        let preIdx = 0;

        function buildSubTree(l, r){
        if( l > r){
            return null;
        }

        let val = preorder[preIdx++];
        let root = new TreeNode(val);
        let m = inorderMap[root.val];
        

        root.left = buildSubTree(l, m - 1);
        root.right = buildSubTree(m + 1, r);

        return root;
    }

    return buildSubTree(0, inorder.length - 1);

    }

    
}

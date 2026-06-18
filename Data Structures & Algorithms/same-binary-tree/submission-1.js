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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let arr1 = [];
        let arr2 = [];

        this.traverse(p, arr1);
        this.traverse(q, arr2);

        console.log(arr1);
        console.log(arr2);

        if(arr1.length == arr2.length){
            for(let i=0; i < arr1.length; i++){
                if(arr1[i] !== arr2[i]){
                    return false;
                }
            }
        }
        else{
            return false;
        }

        return true;
    }

    traverse(root, arr){

        if(root){
            arr.push(root.val);
            this.traverse(root.left, arr);
            this.traverse(root.right, arr);
        }
        else{
            arr.push(null);
        }
}

}
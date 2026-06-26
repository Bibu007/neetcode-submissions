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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let str = [];
        this.serializeDFS(root, str);
        let res = str.join();
        return res;
    }

    serializeDFS(root, str){
        if(root){
            str.push(root.val);
            this.serializeDFS(root.left, str);
            this.serializeDFS(root.right, str);
        }
        else{
            str.push('N');
        }
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let vals = data.split(',');
        let i = {val: 0};

        return this.deserializeDFS(vals, i);         
    }

    deserializeDFS(vals, i){
        if(vals[i.val] == 'N'){
        i.val++;
        return null;
    }

    let node = new TreeNode(Number(vals[i.val]));

    i.val++;

    node.left = this.deserializeDFS(vals, i);
    node.right = this.deserializeDFS(vals, i);

    return node; 
    }

}
// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let copyMap = new Map();
        copyMap.set(null,null)
        return this.copyList(head, copyMap);
    }

    copyList(head, copyMap){
        if(!head){
            return null;
        }

        let newnode = new Node(head.val);
        copyMap.set(head,newnode);

        newnode.next = this.copyList(head.next, copyMap);

        let copy = copyMap.get(head);
        copy.random = copyMap.get(head.random); 
        return newnode;
    }
}

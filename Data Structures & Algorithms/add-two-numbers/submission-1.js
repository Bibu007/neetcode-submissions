/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let c = [0];
        let head = null;

        head = this.add(l1,l2,c);

        if(c[0]==1){
            let current = head;
            let prev = null;
            while(current){
                prev = current;
                current = current.next;
            }
            let newnode = new ListNode(1,null);
            prev.next = newnode;
        }

        return head;
    }

    add(l1,l2,c){
        if(!(l1 || l2)){
            return null;
        }

        let v1 = 0;
        let v2 = 0;

        if(l1){
            v1 = l1.val;         
        }

        if(l2){
            v2 = l2.val;
        }

        let newnode = new ListNode();

        let res = v1 + v2;

        if(c[0]==1){
            res += 1;
            c[0] = 0;
        }

        if(res > 9){
            newnode.val = res - 10;
            c[0] = 1;
        }
         else{
            newnode.val = res;
        } 

        newnode.next = this.add(l1 ? l1.next : null, l2 ? l2.next : null, c);

        return newnode;
    }
}

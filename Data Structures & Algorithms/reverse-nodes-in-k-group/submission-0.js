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
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let dummy = new ListNode(0, null);
        let node = dummy;
        let current = head;
        let count = 0;
        let start = null;

        while(current){
            count++;

            if(count == 1){
                start = current;
            }

            if(count == k){
                let temp = current.next;
                current.next = null;
                node.next = this.reverseList(start);
                start.next = temp;
                node = start;
                count = 0;
                current = start.next;
            }
            else{
                current = current.next
            }
        }
        return dummy.next;
    }

    reverseList(head){
        let current = head;
        let prev = null;

        while(current){ 
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }

        return prev;
    }
}



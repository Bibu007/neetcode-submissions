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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;

        while((fast) && (fast.next)){
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow.next;
        slow.next = null;
        let current = second;
        let prev = null;
        
        while(current){
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }

        let l1 = head;
        let l2 = prev;

        while(l2){
            let temp1 = l1.next;
            l1.next = l2;
            let temp2  = l2.next;
            l2.next = temp1;
            l2 = temp2;
            l1 = temp1;
        }

        return head;

    }
}

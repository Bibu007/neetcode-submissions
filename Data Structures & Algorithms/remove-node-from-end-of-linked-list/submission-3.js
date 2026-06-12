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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        let count = 0;
        let current = head;
        let rem = null;
        let remprev = null;

        while(current){
            count++;
            if(count==n){
                rem = head;
                remprev = head;
            }
            else if(count > n && rem){
                remprev = rem;
                rem = rem.next;
            }
            current = current.next;
        }

        if(remprev == head && rem == remprev){
            head = head.next;
        }
        else if(remprev == null){
            head = null;
        }
        else{
            remprev.next = rem.next;
        }

        return head;
    }
}

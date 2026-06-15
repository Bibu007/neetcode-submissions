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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */

    mergeTwolists(list1, list2){
        let dummy = new ListNode(0,null);
        let node = dummy;

        while(list1 && list2){

            if(list1.val < list2.val){
                node.next = list1;
                node = node.next
                list1 = list1.next;
            }
            else{
                node.next = list2;
                node = node.next;
                list2 = list2.next;
            }
        }

        if(!list1){
                node.next = list2;
            }
        else{
            node.next = list1;
        }

        return dummy.next;
    }


    mergeKLists(lists) {
        if(lists.length == 0){
            return null;
        }
        else if(lists.length == 1){
            return lists[0];
        }
        else{
            let head = null;
            for(let i = 0; i < lists.length; i++){
                head = this.mergeTwolists(head, lists[i]);
            }
            return head;
        }
    }
}

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
    mergeKLists(lists) {
        let r = lists.length - 1;
        return this.divide(lists, 0, r);
    }

    divide(lists, l, r){
        if(l==r){
            return lists[l];
        }

        if(l>r){
            return null;
        }

        let mid  = Math.floor(l + (r - l)/2);
        let left = this.divide(lists, l, mid);
        let right = this.divide(lists, mid + 1, r);

        return this.conquer(left, right);
    }

    conquer(list1, list2){
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
}

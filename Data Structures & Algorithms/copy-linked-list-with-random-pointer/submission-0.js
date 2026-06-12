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
        let oldToCopy = new Map();
oldToCopy.set(null, null); // Handle null pointers easily

// Pass 1: Create nodes
let cur = head;
while (cur) {
    oldToCopy.set(cur, new Node(cur.val));
    cur = cur.next;
}

// Pass 2: Connect pointers
cur = head;
while (cur) {
    let copy = oldToCopy.get(cur);
    copy.next = oldToCopy.get(cur.next);
    copy.random = oldToCopy.get(cur.random);
    cur = cur.next;
}

return oldToCopy.get(head);
    }
}

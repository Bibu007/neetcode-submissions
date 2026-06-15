class node{
    constructor(key, val){
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.map = new Map();
        this.left = new node(0,0);
        this.right = new node(0,0);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    remove(node){
        const prev = node.prev;
        const next = node.next;
        prev.next = node.next;
        next.prev = prev;
    }

    insert(node){
        const prev = this.right.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.right;
        this.right.prev = node;
    }
 
    /**
     * @param {number} key
     * @return {number}
     */
    get(key){
        if(this.map.has(key)){
            const newNode = this.map.get(key);
            this.remove(newNode);
            this.insert(newNode);
            return newNode.val;
        }   
        else{
            return -1;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
            this.remove(this.map.get(key));
        }

        const newNode = new node(key,value);
        this.insert(newNode);
        this.map.set(key,newNode);

        if(this.map.size > this.cap){
            const lru = this.left.next;
            this.remove(lru);
            this.map.delete(lru.key);
        }

    }
}

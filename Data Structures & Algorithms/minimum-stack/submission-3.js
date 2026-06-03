class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.min = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.stack.length==0){
            this.stack.push(val);
            this.minStack.push(val);
        }
        else{
        if(val<=this.minStack[this.minStack.length-1]){
            this.minStack.push(val);
            //this.min = this.minStack[this.minStack.length-1] || null;
        }
        this.stack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.stack.length==0){
            return null;
        }
        if(this.stack[this.stack.length-1] == this.minStack[this.minStack.length-1]){
            this.minStack.pop();
            //this.min = this.minStack[this.minStack.length-1] || null;
        }
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        if(this.stack.length==0){
            return null;
        }
        return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        if(this.stack.length==0){
            return null;
        }
        return this.minStack[this.minStack.length-1];
    }
}

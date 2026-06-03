class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let operators = {
            '+': (num1,num2) => num1 + num2,
            '-': (num1,num2) => num1 - num2,
            '*': (num1,num2) => num1 * num2,
            '/': (num1,num2) => Math.trunc(num1 / num2),
        }

        for(let i=0; i<tokens.length; i++){
            stack.push(tokens[i]);
            if(tokens[i] in operators){
                let top = stack.length-1;
                let res = operators[stack[top]](Number(stack[top-2]),Number(stack[top-1]));
                stack.pop();
                stack.pop();
                stack.pop();
                stack.push(res);
            }
        }
        return stack[0];
    }
}

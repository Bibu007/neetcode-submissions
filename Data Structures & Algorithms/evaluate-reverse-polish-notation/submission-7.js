class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/") {
                let a = (stack.pop());
                let b = (stack.pop());
                switch (tokens[i]) {
                    case "+":
                        stack.push(a + b);
                        break;
                    case "-":
                        stack.push(b - a);
                        break;
                    case "*":
                        stack.push(a * b);
                        break;
                    case "/":
                        stack.push(Math.trunc(b / a));
                        break;
                }
            }
            else{
                stack.push(Number(tokens[i]))
            }
            
        }

        return stack[0];
    }
}

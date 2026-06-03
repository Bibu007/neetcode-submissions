class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temp) {
        let stack = [];
        let top = stack.length-1;
        let res = new Array(temp.length).fill(0);
        for (let i=0; i<temp.length-1; i++){
            let j = i + 1; 
            if(temp[j]>temp[i]){
                res[i] = 1;

                while(!(stack.length==0)){
                    if(temp[j]>temp[stack[stack.length-1]]){
                        res[stack[stack.length-1]] = j - stack[stack.length-1];
                        stack.pop();
                    }
                    else{
                        break;
                    }
                }
            }
            else{
                stack.push(i);
            }

        }

        return res;
    }
}

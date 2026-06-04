class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let obj = {};
        for(let i=0; i<position.length; i++){
            obj[position[i]] = speed[i];
        }
        let stack = [];

        for(let i=position.length-1; i>=0; i--){
            let time = ((target - Object.keys(obj)[i])/obj[Object.keys(obj)[i]]);
            if(stack.length==0){
                stack.push(time);
            }
            else{
                if(stack[stack.length-1]<time){
                    stack.push(time);
                }
            }
        }
        return stack.length;
    }
}

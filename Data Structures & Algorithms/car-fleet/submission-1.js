class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        //position.sort((a,b) => b - a);
        let obj = {};
        for(let i=0; i<position.length; i++){
            obj[position[i]] = speed[i];
        }
        //obj.sort((a,b) => b - a);
        //speed.sort((a,b) => b - a);
        //console.log(position);
        console.log(obj);
        let stack = [];

        for(let i=position.length-1; i>=0; i--){
            console.log(Object.keys(obj)[i]);
            console.log(obj[Object.keys(obj)[i]])
            let time = ((target - Object.keys(obj)[i])/obj[Object.keys(obj)[i]]);
            console.log(`-> ${time}`)
            if(stack.length==0){
                stack.push(time);
            }
            else{
                if(stack[stack.length-1]<time){
                    stack.push(time);
                }
            }
        }
        console.log(stack);
        return stack.length;
    }
}

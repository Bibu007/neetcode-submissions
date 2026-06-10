class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = [];
        let stack = [];

        for(let i=0; i<position.length; i++){
            let temp =[];
            temp.push(position[i]);
            temp.push(speed[i]);
            cars.push(temp);
        }

        cars.sort((a,b) => b[0] - a[0]);

        for(let i=0; i<position.length; i++){
            let time = (target - cars[i][0])/cars[i][1];
            if(stack.length==0){
                stack.push(time);
            }
            else if(stack[stack.length - 1] < time){
                stack.push(time);
            }
        }

        return stack.length;
    }
}

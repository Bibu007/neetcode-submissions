class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = [];
        let time = 0;
        const res = [];

        for(let i = 0; i < position.length; i++){
            time = (target - position[i]) / speed[i];
            res.push([position[i], time]);
        }

        res.sort((a,b) => b[0] - a[0])

        console.log(res);

        for(let i = 0; i < res.length; i++){
            if(stack.length === 0 || res[i][1] > stack[stack.length - 1]){
                stack.push(res[i][1]);
            }
        }

        return stack.length;
    }
}

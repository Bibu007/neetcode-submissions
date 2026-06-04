class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let maxArea = 0;
        for( let i=0; i<=heights.length; i++){
            if(stack.length==0){
                stack.push(i);
            }
            else{
                while(stack.length && (i===heights.length || heights[i] <= heights[stack[stack.length-1]])){
                    let h = heights[stack.pop()];
                    let w = stack.length === 0 ? i : i-stack[stack.length-1]-1;
                    let a = h * w;
                    maxArea = Math.max(maxArea, a);
                }
                stack.push(i);
            }
        }
        return maxArea;
    }
}

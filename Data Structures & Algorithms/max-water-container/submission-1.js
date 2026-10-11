class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let i = 0;
        let j = heights.length - 1;

        while(i < j){
            let area = Math.min(heights[i], heights[j]) * (j - i);
            max = Math.max(max, area);
            if(heights[i] < heights[j]){
                i++;
            }
            else if(heights[j] < heights[i]){
                j--;
            }
            else{
                i++;
                j--;
            }
        }

        return max;
    }
}

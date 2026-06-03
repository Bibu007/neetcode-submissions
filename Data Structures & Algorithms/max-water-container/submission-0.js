class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;
        let max = 0;

        while(i < j){
            console.log(i);
            console.log(j);
            let current = (j-i) * Math.min(heights[i], heights[j]);
            if(current > max){max = current;}
            if(heights[i] < heights[j]){i++;}
            else if(heights[i] > heights[j]){j--;}
            else if(heights[i]==heights[j]){i++; j--;}
        }
        return max;
    }
}

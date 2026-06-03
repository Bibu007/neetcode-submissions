class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        let prefix = new Array(n).fill(0);
        let suffix = new Array(n).fill(0);
        let res = 0;

        for(let i=1; i<n; i++){
            prefix[i] = Math.max(height[i-1], prefix[i-1]);
        }
        console.log(prefix);

        for(let j=n-2; j>=0; j--){
            suffix[j] = Math.max(suffix[j+1], height[j+1]);
        }
        console.log(suffix);

        for(let k=0; k<n; k++){
            let currentHeight = Math.min(prefix[k], suffix[k]) - height[k];
            console.log(currentHeight);
            if(currentHeight<0){currentHeight=0;}
            res = res +  currentHeight;
        }

        return res;
    }
}

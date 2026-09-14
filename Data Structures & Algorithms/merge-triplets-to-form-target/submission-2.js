class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const validTriplets = new Array();

        for(const t of triplets){
            if(!(t[0] > target[0] || t[1] > target[1] || t[2] > target[2])){
                validTriplets.push([...t]);
            }
        }

        for(let j = 0; j < 3; j++){
            let max = -Infinity;
            for(let i = 0; i < validTriplets.length; i++){
                max = Math.max(max, validTriplets[i][j]);
            }
            if(max !== target[j]){
                return false;
            }
        }

        return true;
    }
}

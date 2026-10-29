class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let r = Math.max(...piles);

        let l = 1;
        let res = r;

        while (l <= r) {
            const mid = Math.floor((r + l) / 2);

            let totalTime = 0;

            for(const p of piles){
                totalTime += Math.ceil(p/mid);
            }

            
            if (totalTime <= h) {
                res = mid;
                r = mid - 1;
            }
            else{
                l = mid + 1;
            }
        }

        return res;
    }
}

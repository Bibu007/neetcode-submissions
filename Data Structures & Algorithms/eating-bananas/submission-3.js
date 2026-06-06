class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let r = piles.reduce((acc,current) => Math.max(acc,current),0);
        let l = 1;
        
        let res = r;

        while(l <= r){
            let totalTime = 0;
            let k = Math.floor(l + (r-l)/2);

            for(const p of piles){
                totalTime += Math.ceil(p/k);
            }

            if(totalTime > h){
                l = k + 1;
            }
            else{
                res = k;
                r = k - 1;
            }
        }
        return res;
    }
}
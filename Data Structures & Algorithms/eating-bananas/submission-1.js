class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    binarySearch(l,h,t,piles){
        if(l>h){return l;}

        let m = Math.floor(l+(h-l)/2);
        let k = m;

        let p = 0;
        for(let i=0; i<piles.length; i++){
            p = p + Math.ceil(piles[i]/k);
        }

        if(p <= t) {
            let res = this.binarySearch(l,m-1,t,piles);
            return res === -1 || res > k ? k : res;
        } else {
            return this.binarySearch(m+1,h,t,piles);
        }
    }

    minEatingSpeed(piles, h) {
        let max = piles.reduce((acc,current) => Math.max(acc,current),0);
        
        return this.binarySearch(1,max,h,piles);
    }
}
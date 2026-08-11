class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n<=2){
            return n;
        }
        let back1 = 1;
        let back2 = 2;
        let next = 0;

        for(let i = n-2; i > 0; i--){
            next = back1 + back2;
            back1 = back2;
            back2 = next;
        }

        return next;
    }
}

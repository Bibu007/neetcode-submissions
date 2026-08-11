class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n==1){
            return 1;
        }
        let back1 = 1;
        let back2 = 1;
        let next = 0;

        for(let i = 1; i < n; i++){
            next = back1 + back2;
            back1 = back2;
            back2 = next;
        }

        return next;
    }
}

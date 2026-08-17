class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;
        let l = 0;
        let r = 0;

        for (let i = 0; i < s.length; i++) {
            l = i;
            r = i;
            while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
                count+=1;
                l = l - 1;
                r = r + 1;
            }

            l = i;
            r = i + 1;
            while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
                count+=1
                l = l - 1;
                r = r + 1;
            }
        }

        return count;
    }
}

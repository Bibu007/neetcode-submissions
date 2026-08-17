class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let res = "";
        let resLen = 0;
        let l = 0;
        let r = 0;

        for (let i = 0; i < s.length; i++) {
            l = i;
            r = i;
            while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
                if (resLen < r - l + 1) {
                    res = s.slice(l, r + 1);
                    resLen = r - l + 1;
                }
                l = l - 1;
                r = r + 1;
            }

            l = i;
            r = i + 1;
            while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
                if (resLen < r - l + 1) {
                    res = s.slice(l, r + 1);
                    resLen = r - l + 1;
                }
                l = l - 1;
                r = r + 1;
            }
        }

        return res;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let r = 0;
        let l = 0;
        let len = 0;
        let maxLen = 0;
        const charSet = new Set();

        if(s.length < 2){
            return s.length;
        }

        while (l < s.length) {
            if (!charSet.has(s[l])) {
                len = l - r + 1;
                maxLen = Math.max(len, maxLen)
                charSet.add(s[l]);
                l += 1;
            } else {
                maxLen = Math.max(len, maxLen);
                while (s[r] !== s[l]) {
                    charSet.delete(s[r]);
                    r += 1;
                }
                r+=1;
                l+=1
            }
        }

        return maxLen;
    }
}

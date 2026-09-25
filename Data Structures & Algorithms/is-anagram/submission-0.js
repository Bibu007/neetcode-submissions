class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const frequency = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            frequency[s.charCodeAt(i) - 97] += 1;
        }

        for (let i = 0; i < t.length; i++) {
            frequency[t.charCodeAt(i) - 97] -= 1;
        }

        for (let i = 0; i < 26; i++) {
            if (frequency[i] !== 0) {
                return false;
            }
        }

        return true;
    }
}

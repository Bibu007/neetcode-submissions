class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1Arr = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            s1Arr[s1.charCodeAt(i) - 97] += 1;
        }

        let l = 0;
        let r = s1.length - 1;

        while (r < s2.length) {
            if (this.isMatching(s2.slice(l, r + 1), s1Arr)) {
                return true;
            }
            l += 1;
            r += 1;
        }
        return false;
    }

    isMatching(m, n) {
        const mArr = new Array(26).fill(0);
        for (let i = 0; i < m.length; i++) {
            mArr[m.charCodeAt(i) - 97] += 1;
        }

        for (let i = 0; i < 27; i++) {
            if (mArr[i] !== n[i]) {
                return false;
            }
        }

        return true;
    }
}

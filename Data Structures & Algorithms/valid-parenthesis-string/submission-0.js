class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let leftMin = 0;
        let leftMax = 0;

        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(") {
                leftMin += 1;
                leftMax += 1;
            }

            if (s[i] === "*") {
                if (leftMin > 0) {
                    leftMin -= 1;
                }
                leftMax += 1;
            }

            if (s[i] === ")") {
                if (leftMin > 0) {
                    leftMin -= 1;
                }
                leftMax -= 1;
                if (leftMax < 0) {
                    return false;
                }
            }
        }

        if (leftMin === 0) {
            return true;
        } else {
            return false;
        }
    }
}

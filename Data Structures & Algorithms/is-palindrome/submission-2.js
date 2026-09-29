class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let input = "";

        for (let i = 0; i < s.length; i++) {
            if (
                (s[i] >= "A" && s[i] <= "Z") ||
                (s[i] >= "a" && s[i] <= "z") ||
                (s[i] >= "0" && s[i] <= "9")
            ) {
                input += s[i].toLowerCase();
            }
        }

        let i = 0;
        let j = input.length - 1;

        while (i < j) {
            if (input[i])
                if (input[i] !== input[j]) {
                    return false;
                }
            i++;
            j--;
        }

        return true;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.replace(/[^a-zA-Z0-9]/g, ""); 
        let i = 0;
        let j = str.length - 1;

        while (i < j) {
            if (str[i].toLowerCase() !== str[j].toLowerCase()) {
                return false;
            }
            i++;
            j--;
        }

        return true;
    }
}

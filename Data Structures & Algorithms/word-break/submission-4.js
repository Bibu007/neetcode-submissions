class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let wordDictSet = new Set();

        for (let i = 0; i < wordDict.length; i++) {
            wordDictSet.add(wordDict[i]);
        }

        let dp = new Array(s.length).fill(false);
        dp[s.length] = true;
        let j = s.length;

        for (let i = s.length - 1; i >= 0; i--) {
            for (const word of wordDictSet) {
                let end = i + word.length;
                let temp = s.slice(i, i + word.length);
                if (wordDictSet.has(temp) && dp[end]) {
                    dp[i] = true;
                }
            }
        }

        if (dp[0] === true) {
            return true;
        }

        return false;
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let wordDictSet = new Set();
        let res = [];
        for (let i = 0; i < wordDict.length; i++) {
            wordDictSet.add(wordDict[i]);
        }
        //console.log(wordDictSet);

        let dp = new Array(s.length).fill(false);
        dp[s.length] = true;

        //console.log(dp);
        let j = s.length;
        res.push(j);

        for (let i = s.length - 1; i >= 0; i--) {
            //console.log(res);
            for (const word of wordDictSet) {
                let end = i + word.length
                let temp = s.slice(i, i + word.length);
                //console.log(temp);
                //console.log(wordDictSet.has(temp));
                //console.log(dp[i + (j - i)]);
                if (wordDictSet.has(temp) && dp[end]) {
                    dp[i] = true;
                    res.push(i);
                }
            }
        }

        if (dp[0] === true) {
            return true;
        }

        return false;
    }
}

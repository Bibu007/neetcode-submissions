class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if (!wordList.includes(endWord)) {
            return 0;
        }
        wordList.push(beginWord);
        let nei = {};

        for (const c of wordList) {
            for (let i = 0; i < c.length; i++) {
                const pattern = c.slice(0, i) + "*" + c.slice(i + 1, c.length);
                if (!nei[pattern]) {
                    nei[pattern] = [];
                }
                nei[pattern].push(c);
            }
        }

        console.log(nei);

        let q = [];
        let visit = new Set();
        let res = 1;

        q.push(beginWord);
        visit.add(beginWord);

        while (q.length !== 0) {
            let size = q.length;
            for (let i = 0; i < size; i++) {
                const word = q.shift();
                if (word === endWord) {
                    return res;
                }
                for (let i = 0; i < word.length; i++) {
                    const pattern = word.slice(0, i) + "*" + word.slice(i + 1, word.length);
                    for (const c of nei[pattern]) {
                        if (!visit.has(c)) {
                            q.push(c);
                            visit.add(c);
                        }
                    }
                }
            }
            res = res + 1;
        }
        return 0;
    }
}

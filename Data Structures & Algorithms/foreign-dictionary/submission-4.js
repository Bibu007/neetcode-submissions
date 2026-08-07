class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const adj = {};
        const indegree = new Map();
        const n = words.length;
        let count = 0;

        for (const word of words) {
            for (const char of word) {
                if (!adj[char]) {
                    count++;
                    adj[char] = [];
                }
                if (!indegree.has(char)) {
                    indegree.set(char, 0);
                }
            }
        }

        for (let i = 0; i < n - 1; i++) {
            let s1 = words[i];
            let s2 = words[i + 1];

            if((s1.length > s2.length) && s1.startsWith(s2)){
                return "";
            }

            let minLength = Math.min(s1.length, s2.length);

            for (let j = 0; j < minLength; j++) {
                if (s1[j] !== s2[j]) {
                    adj[s1[j]].push(s2[j]);
                    let curIndegree = indegree.get(s2[j]);
                    indegree.set(s2[j], curIndegree + 1);
                    break;
                }
            }
        }

        const q = [];
        const stack = [];

        for(const char of indegree){
            if(char[1] === 0){
                q.push(char[0]);
            }
        }

        while(q.length !== 0){
            let curChar = q.shift();
            stack.push(curChar);
            if(adj[curChar].length !== 0){
                for(const char of adj[curChar]){
                    let curIndegree = indegree.get(char);
                    indegree.set(char, curIndegree - 1);
                    if(curIndegree - 1 === 0){
                        q.push(char);
                    }
                }
            }
        }

        if(stack.length < count){
            return "";
        }

        return stack.join('');
    }
}

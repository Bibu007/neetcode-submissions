class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const res = [];
        const lastIndex = new Map();
        let size = 0;
        let j = 0;

        for(let i = 0; i < S.length; i++){
                lastIndex.set(S[i], i);
        }

        console.log(lastIndex);

        for (let i = 0; i < S.length; i++) {
            if(j < lastIndex.get(S[i])){
                j = lastIndex.get(S[i])
            }
            size += 1;

            if(j === i){
                res.push(size);
                size = 0;
            }
                
        }

        return res;
    }
}

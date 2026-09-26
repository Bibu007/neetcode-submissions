class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strMap = new Map()
    for (let i = 0; i < strs.length; i++) {
        let sortedStr = [...strs[i]].sort().join('');
        if (!strMap.has(sortedStr)) {
            strMap.set(sortedStr, [strs[i]])
        }
        else {
            let temp = strMap.get(sortedStr);
            temp.push(strs[i]);
            strMap.set(sortedStr, temp);
        }
        //console.log(strMap);
    }

    const res = []

    for (const c of strMap.keys()) {
        //console.log(strMap.get(c));
        res.push(strMap.get(c))
        //console.log(res)
    }

    return res;
    }
}

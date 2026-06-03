class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let r=0;
        let l=0;
        let count = 0;
        let res = 0;
        let n = s.length
        let mp = {};
        let length = 0;
        let maxLength = 0;

        for (r=0; r<n; r++){
            if(s[r] in mp){
                mp[s[r]]++;
            }
            else{
                mp[s[r]] = 1;
            }
            if(mp[s[r]]>count){
                count = mp[s[r]];
            }
            if(((r-l+1)-count)>k){
                mp[s[l]]--;
                l++;
                //l = Math.max(r+1,l);
            }
            console.log(mp);
            console.log(r);
            console.log(l);
            length = (r-l)+1;
            if(maxLength<length){
                maxLength = length;
            }
        }

        //let length = ((r-1)-l)+1;
        console.log(r);
        console.log(l);
        console.log(length);
        return maxLength;
    }
}

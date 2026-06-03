class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let countT = {};
        let window = {};
        let l = 0;
        let r = 0;
        let res = [-1,-1];
        let resLen = Infinity;
        let have = 0;
        let need = 0;
        
        for(let i=0; i<t.length; i++){
            if(t[i] in countT){
                countT[t[i]]+=1;
            }
            else{
                need++;
                countT[t[i]]=1;
                window[t[i]]=0;
            }
        }
        console.log(countT);
        console.log(window);
        console.log(need);

        for(r=0; r<s.length; r++){
            if(s[r] in countT){
                window[s[r]]+=1;
                if(window[s[r]]==countT[s[r]]){
                    have++;
                    console.log(have);
                }
            }
            while(have==need){
                if (r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    res = [l, r];
                }
            if(s[l] in countT){
                window[s[l]]--;
                if (window[s[l]] < countT[s[l]]) {
                    have--;
                }
            }
            l++;
            
            console.log(resLen);
        }
        }

        

        return resLen === Infinity ? '' : s.slice(res[0], res[1]+1);
    }
}

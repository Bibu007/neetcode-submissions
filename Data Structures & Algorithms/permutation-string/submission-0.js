class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1==''){return true;}

        let s1arr = new Array(26).fill(0);
        let s2arr = new Array(26).fill(0);
        let l = 0;
        let r = 0;
        /*
        for(let i=0; i<s2.length; i++){
            console.log(s2.charCodeAt(i)-97);
            s2arr[s2.charCodeAt(i)-97]+=1;
        }
        */

        for(let j=0; j<s1.length; j++){
            s1arr[s1.charCodeAt(j)-97]+=1;
        }
        console.log(s1arr);
        /*
        for(let r=s1.length-1; r<s2.length; r++){
            let arr = new Array(26).fill(0);
            arr[s2.charCodeAt(j)-97]+=1;
        }
        */

        while(r-l+1<s1.length){
                s2arr[s2.charCodeAt(r)-97]+=1; 
                r++;  
            }

        for(let r=s1.length-1; r<s2.length; r++){
            s2arr[s2.charCodeAt(r)-97]+=1;
            if(String(s2arr)==String(s1arr)){
                return true;
            }
            else{
                s2arr[s2.charCodeAt(l)-97]-=1;
                l++;             
            }

        }
        //console.log(s2arr);
        return false;
    }
}

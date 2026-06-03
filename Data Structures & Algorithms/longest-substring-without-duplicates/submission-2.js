class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(str) {

        let start = 0;
        let end = 0;
        let maxCount = 0;
        let count = 0;
        let strSet = {};
        let n = str.length;


        for(let i=0; i<n; i++){
            console.log(strSet);
            console.log(str[i]);
            console.log(str[i] in strSet);
            if(!(str[i] in strSet)){
                console.log("Hey");
                strSet[str[i]] = i;
                console.log(strSet);
                end++;
                count+=1;
                console.log(count);
                if(count>maxCount){
                    maxCount = count;
                }
            }
            else{
                start=Number(strSet[str[i]])+1;
                //console.log(start);
                end=i;
                strSet ={};
                count=0;
                for(let j=start; j<=end; j++){
                    strSet[str[j]] = j;
                    count+=1;
                }
                //strSet = new Set();
                //strSet.add(str[i]);
                //count=1;
            }
        }
        return maxCount;
    }
}

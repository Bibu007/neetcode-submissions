class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        let selected = 0;
        //console.log(cols);
        //console.log(rows);
        for(let i = 0; i < rows; i++){
            //console.log(target >= matrix[i][0] && target <= matrix[i][cols - 1])
            if(target >= matrix[i][0] && target <= matrix[i][cols - 1]){
                selected = i;
            }
        }

        //console.log(selected)

        let low = 0;
        let high = cols - 1;

        while(low<=high){
            
            let mid = Math.floor((high + low)/2);
            //console.log("Hey");

            if(matrix[selected][mid] < target){
                low = mid + 1;
            }
            else if(matrix[selected][mid] > target){
                high = mid - 1;
            }
            else{
                return true;
            }
        }

        return false;
    }
}

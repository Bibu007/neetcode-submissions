class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let rows = heights.length;
        let cols = heights[0].length;
        let pac = new Set();
        let atl = new Set();
        let visitPac = Array.from({ length: rows }, () => Array(cols).fill(false));
        let visitAtl = Array.from({ length: rows }, () => Array(cols).fill(false));
        let res = [];

        for(let i = 0; i < cols; i++){
            this.dfs(heights, 0, i, visitPac, pac, 0);
            this.dfs(heights, rows - 1, i, visitAtl, atl, 0);
        }

        for(let i = 0; i < rows; i++){
            this.dfs(heights, i, 0, visitPac, pac, 0);
            this.dfs(heights, i, cols - 1, visitAtl, atl, 0);
        }

        for(let i = 0; i < heights.length; i++){
            for(let j = 0; j < heights[0].length; j++){
                if(visitPac[i][j] && visitAtl[i][j]){
                    res.push([i,j]);
                }
            }
        }

        return res;
    }

    dfs(heights, i, j, visit, oceanSet, parentHeight){

        if(i < 0 || i === heights.length || j < 0 || j === heights[0].length || visit[i][j] === true || heights[i][j] < parentHeight){
            return;
        }

        visit[i][j] = true;

        let curHeight = heights[i][j];

        this.dfs(heights, i, j - 1, visit, oceanSet, curHeight);
        this.dfs(heights, i + 1, j, visit, oceanSet, curHeight);
        this.dfs(heights, i, j + 1, visit, oceanSet, curHeight);
        this.dfs(heights, i - 1, j, visit, oceanSet, curHeight);
    }
}

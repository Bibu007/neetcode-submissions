class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let res = 0

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                if(grid[i][j] === "1"){
                    res++;
                    this.dfs(grid,i,j,rows,cols);
                }
            }
        }

        return res;
    }

    dfs(grid,i,j,rows,cols){
        let c = null;
        if (i >= 0 && i < rows && j >= 0 && j < cols) {
            c = grid[i][j];
        }
        else {
            return;
        }

        if(c === "0"){
            return;
        }

        grid[i][j] = "0";

        this.dfs(grid, i, j - 1, rows, cols);
        this.dfs(grid, i + 1, j, rows, cols);
        this.dfs(grid, i, j + 1, rows, cols);
        this.dfs(grid, i - 1, j, rows, cols);
    }
}

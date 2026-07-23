class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let maxArea = 0;

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                if(grid[i][j] === 1){
                    let area = [0];
                    this.dfs(grid,i,j,rows,cols,area);
                    if(area[0] > maxArea){
                        maxArea = area[0];
                    }
                }
            }
        }
        return maxArea;
    }

    dfs(grid,i,j,rows,cols,area){
        let c = null;
        if(i >= 0 && i < rows && j >= 0 && j < cols){
            c = grid[i][j];
        }
        else{
            return;
        }

        if(c === 0){
            return;
        }

        area[0]++;
        grid[i][j] = 0;

        this.dfs(grid, i, j - 1, rows, cols, area);
        this.dfs(grid, i + 1, j, rows, cols, area);
        this.dfs(grid, i, j + 1, rows, cols, area);
        this.dfs(grid, i - 1, j, rows, cols, area);

    }
}

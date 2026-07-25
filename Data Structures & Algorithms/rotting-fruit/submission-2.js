class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let q = [];
        let visit = Array.from({ length: rows }, () => Array(cols).fill(false));
        let count = 0;
        let min = 0;


        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 2) {
                    visit[i][j] = true;
                    q.push([i, j]);
                }
                if (grid[i][j] === 1) {
                    count++;
                }
            }
        }

        if(q.length === 0 && count === 0){
            return 0;
        }
        

        while (q.length > 0) {
            let qLen = q.length;

            for (let i = 0; i < qLen; i++) {
                let temp = q.shift();
                let r = temp[0],
                    c = temp[1];
                if (grid[r][c] === 1) {
                    count--;
                }
                if (count === 0) {
                    return min;
                }
                grid[r][c] = min;

                this.addToQueue(r, c - 1, grid, q, visit);
                this.addToQueue(r + 1, c, grid, q, visit);
                this.addToQueue(r, c + 1, grid, q, visit);
                this.addToQueue(r - 1, c, grid, q, visit);
            }
            min += 1;
        }
        return -1;
    }

    addToQueue(i, j, grid, q, visit) {
        if (
            i < 0 ||
            i === grid.length ||
            j < 0 ||
            j === grid[0].length ||
            visit[i][j] === true ||
            grid[i][j] === 0
        ) {
            return;
        } else {
            visit[i][j] = true;
            q.push([i, j]);
        }
    }
}

class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let q = [];
        let visit = Array.from({ length: rows }, () => Array(cols).fill(false));
        let dist = 0;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 0) {
                    visit[i][j] = true;
                    q.push([i, j]);
                }
            }
        }

        while (q.length > 0) {
            let qLen = q.length;

            for (let i = 0; i < qLen; i++) {
                let temp = q.shift();
                let r = temp[0],
                    c = temp[1];
                grid[r][c] = dist;

                this.addToQueue(r, c - 1, grid, q, visit);
                this.addToQueue(r + 1, c, grid, q, visit);
                this.addToQueue(r, c + 1, grid, q, visit);
                this.addToQueue(r - 1, c, grid, q, visit);
            }
            dist += 1;
        }

        return grid;
    }

    addToQueue(r, c, grid, q, visit) {
        if (
            r < 0 ||
            r === grid.length ||
            c < 0 ||
            c === grid[0].length ||
            grid[r][c] === -1 ||
            visit[r][c] === true
        ) {
            return;
        } else {
            visit[r][c] = true;
            q.push([r, c]);
        }
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let rows = board.length;
        let cols = board[0].length;
        let region = Array.from({ length: rows }, () => Array(cols).fill(true));

        for (let i = 0; i < cols; i++) {
            this.dfs(board, 0, i, region);
            this.dfs(board, rows - 1, i, region);
        }

        for (let i = 0; i < rows; i++) {
            this.dfs(board, i, 0, region);
            this.dfs(board, i, cols - 1, region);
        }

        for(let i = 1; i < rows - 1; i++){
            for(let j = 1; j < cols - 1; j++){
                if(board[i][j] === "O" && region[i][j] === true){
                    board[i][j] = "X";
                }
            }
        }

        return board;
    }

    dfs(board, i, j, region) {
        if (i < 0 || i === board.length || j < 0 || j === board[0].length || board[i][j] !== "O" || region[i][j] === false) {
            return;
        }

        region[i][j] = false;

        this.dfs(board, i, j - 1, region);
        this.dfs(board, i + 1, j, region);
        this.dfs(board, i, j + 1, region);
        this.dfs(board, i - 1, j, region);
    }
}

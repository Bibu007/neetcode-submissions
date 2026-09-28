class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map();
        const cols = new Map();
        const squares = new Map();

        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                if(board[i][j] === "."){
                    continue;
                }

                if(!rows.has(i)){
                    rows.set(i, new Set());
                    rows.get(i).add(board[i][j]);
                }
                else{
                        if(rows.get(i).has(board[i][j])){
                            return false;
                    }
                    else{
                        rows.get(i).add(board[i][j])
                    }
                }

                if(!cols.has(j)){
                    cols.set(j, new Set());
                    cols.get(j).add(board[i][j]);
                }
                else{
                        if(cols.get(j).has(board[i][j])){
                            return false;
                    }
                    else{
                        cols.get(j).add(board[i][j])
                    }
                }

                let squareKey = `${Math.floor(i/3)},${Math.floor(j/3)}`;

                if(!squares.has(squareKey)){
                    squares.set(squareKey, new Set());
                    squares.get(squareKey).add(board[i][j]);
                }
                else{
                        if(squares.get(squareKey).has(board[i][j])){
                            return false;
                    }
                    else{
                        squares.get(squareKey).add(board[i][j]);
                    }
                }
            }
        }
        return true;
    }
}

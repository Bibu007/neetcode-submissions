class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                let res = this.backtrack(board,word,i,j,0);
                if(res === true){
                    return true
                }
                }
            }
            return false;
        }

    backtrack(board,word,i,j,k){
        if(k === word.length){
            return true;
        }

         if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[k]) {
            return false;
        }
        
        if(board[i][j] === word[k]){
            let temp = board[i][j];
            board[i][j] = "#";
            let found = (this.backtrack(board,word,i,j-1,k+1) ||
            this.backtrack(board,word,i-1,j,k+1) ||
            this.backtrack(board,word,i,j+1,k+1) ||
            this.backtrack(board,word,i+1,j,k+1));

            board[i][j] = temp;
            return found;
        }
    }
}
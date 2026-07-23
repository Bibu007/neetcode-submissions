class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
        this.index = -1;
    }
}

class WordsTrie {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word, index) {
        let cur = this.root;
        for (const c of word) {
            if (!cur.children[c]) {
                cur.children[c] = new TrieNode();
            }
            cur = cur.children[c];
        }
        cur.isWord = true;
        cur.index = index;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        let sol = [];
        let wordsT = new WordsTrie();
        for (let i = 0; i < words.length; i++) {
            wordsT.addWord(words[i], i);
        }
        //console.log(wordsT);

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                this.backtrack(board, i, j, wordsT.root, words, sol);
            }
        }
        return sol;
    }

    backtrack(board, i, j, node, words, sol) {
        //console.log(board);
        if (node.isWord) {
            sol.push(words[node.index]);
            node.isWord = false;
        }
        let n = board.length;
        let c = null;

        if(i >= 0 && i < n && j >= 0 && j < board[0].length){
            c = board[i][j];
            }
        else{
            return;
        }

        if (node.children[c]) {
            let temp = board[i][j];
            board[i][j] = "#";
            this.backtrack(board, i, j - 1, node.children[c], words, sol);
            this.backtrack(board, i + 1, j, node.children[c], words, sol);
            this.backtrack(board, i, j + 1, node.children[c], words, sol);
            this.backtrack(board, i - 1, j, node.children[c], words, sol);
            board[i][j] = temp;
        }
    }
}

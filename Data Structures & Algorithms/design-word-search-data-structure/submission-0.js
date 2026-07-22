class TrieNode{
    constructor(){
        this.children = {};
        this.word = false;
    }

}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur = this.root;
        for(const c of word){
            if(!cur.children[c]){
                cur.children[c] = new TrieNode();
            }
            cur = cur.children[c];
        }
        cur.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(word,0,this.root);
    }

    dfs(word, j, node){
        let cur = node;
        for(let i = j; i < word.length; i++){
            if(word[i] === "."){
                for(const w in cur.children){
                    if(cur.children[w]!==null && this.dfs(word,i+1,cur.children[w])){
                        return true;
                    }
                }
                return false;
            }
            else{
                if(!(cur.children[word[i]])){
                    return false;
                }
                cur = cur.children[word[i]]
            }
        }
        return cur.word;
    }
}

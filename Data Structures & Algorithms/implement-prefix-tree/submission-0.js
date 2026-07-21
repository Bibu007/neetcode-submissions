class TrieNode{
    constructor(){
        this.characters = {};
        this.endOfWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.head = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cur = this.head;
        for(let c of word){
            if(!(c in cur.characters)){
                cur.characters[c] = new TrieNode();
            }
            cur = cur.characters[c];
        }
        cur.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let cur = this.head;
        for(let c of word){
            if(c in cur.characters){
                cur = cur.characters[c];
            }
            else{
                break;
            }
        }
        return cur.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cur = this.head;
        for(let c of prefix){
            if(c in cur.characters){
                cur = cur.characters[c];
            }
            else{
                return false;
            }
        }
        return true;
    }
}

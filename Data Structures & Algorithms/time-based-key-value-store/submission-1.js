class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!(this.keyStore.has(key))){
            this.keyStore.set(key, []);
        }
        
            this.keyStore.get(key).push([value,timestamp]);
        
        //console.log(this.keyStore);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
      let l = 0;
      let value = this.keyStore.get(key) || [];
      let r = value.length - 1;
      let result = '';

      while(l <= r){
        let m = l + Math.floor((r-l)/2);

        if(value[m][1] <= timestamp){
            result = value[m][0];
            l = m + 1;
        }
        else{
            r = m - 1;
        }
      }  
      return result;
    }
}

class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        let timesMap = new Map();

        for (let i = 1; i <= n; i++) {
            timesMap.set(i, []);
        }

        for (const t of times) {
            const temp = [];
            temp.push(t[1]);
            temp.push(t[2]);

            timesMap.get(t[0]).push(temp);
        }

        console.log(timesMap);

        const dist = new Array(n + 1).fill(Infinity);
        const intree = new Array(n + 1).fill(false);

        let v = k;

        dist[k] = 0;
        //intree[k] = true;

        while (intree[v] === false) {
            intree[v] = true;

            

            for (const c of timesMap.get(v)) {
                //console.log(c);
                //console.log(c[1] < dist[c[0]] );
                if (dist[v] + c[1] < dist[c[0]] && intree[c[0]] === false) {
                    dist[c[0]] = dist[v] + c[1];
                    //console.log("Hey");
                }
            }
            let minDist = Infinity;
            for (let i = 1; i <= n; i++) {
                //console.log(minDist);
                //console.log(dist[i]);
                //console.log((dist[i] < minDist));
                //console.log(intree[i]);
                if (dist[i] < minDist && intree[i] === false) {
                    minDist = dist[i];
                    v = i;
                }
            }
        }

        //console.log(dist);

        let maxTime = 0;
        for (let i = 1; i <= n; i++) {
            if (dist[i] === Infinity) return -1;
            maxTime = Math.max(maxTime, dist[i]);
        }
        return maxTime;
    }
}

class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) {
            return false;
        }
        hand = hand.sort();

        const freqMap = new Map();
        const handSet = new Set(hand);

        hand.map((item) => {
            if (freqMap.has(item)) {
                freqMap.set(item, freqMap.get(item) + 1);
            } else {
                freqMap.set(item, 1);
            }
        });

        //console.log(freqMap);

        const minQueue = new MinPriorityQueue();

        for(const k of handSet){
            minQueue.enqueue(k);
        }

        //console.log(minQueue);

        while (!minQueue.isEmpty()) {
            let first = minQueue.front();

            for (let i = first; i < first + groupSize; i++) {
                //console.log(i)
                if (!freqMap.has(i)) {
                    return false;
                }
                freqMap.set(i, freqMap.get(i) - 1);
                //console.log(freqMap);
                if (freqMap.get(i) === 0) {
                    //console.log(minQueue.front())
                    if (minQueue.front() !== i) {
                        return false;
                    }
                    minQueue.dequeue();
                }
            }
        }
        return true;
    }
}

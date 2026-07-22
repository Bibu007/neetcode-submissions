class Twitter {
    constructor() {
        this.tweet = {};
        this.followMap = {};
        this.count = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.count++
        if (userId in this.tweet) {
            this.tweet[userId].push([tweetId,this.count]);
        } else {
            this.tweet[userId] = [[tweetId,this.count]];
        }
        if (!(userId in this.followMap)) {
            this.followMap[userId] = new Set();
            this.followMap[userId].add(userId);
        }
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        // Initialize MaxPriorityQueue with a priority property selector
        let maxHeap = new MaxPriorityQueue((item) => item[1]);
        let res = [];

        // 1. Check if user exists in followMap
        if (!(userId in this.followMap)) {
            // If they haven't followed anyone or posted, 
            // check if they have tweets at least
            if (!(userId in this.tweet)){return []};
            this.followMap[userId] = new Set([userId]);
        }

        for (let u of this.followMap[userId]) {
            if (this.tweet[u]) {
                for (let t of this.tweet[u]) { // Use 'of' not 'in'
                    maxHeap.enqueue(t);
                }
            }
        }

        while (!maxHeap.isEmpty() && res.length < 10) {
            let temp = maxHeap.dequeue();
            // temp.element is the [tweetId, count] array
            res.push(temp[0]); 
        }

        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (followerId in this.followMap) {
            this.followMap[followerId].add(followeeId);
        } else {
            this.followMap[followerId] = new Set();
            this.followMap[followerId].add(followerId);
            this.followMap[followerId].add(followeeId);
        }
        /*
        if (!(followeeId in this.followMap)) {
            this.followMap[followeeId] = new Set();
            this.followMap[followeeId].add(followeeId);
        }
        */
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (followerId !== followeeId) {
            this.followMap[followerId].delete(followeeId);
        }
    }
}

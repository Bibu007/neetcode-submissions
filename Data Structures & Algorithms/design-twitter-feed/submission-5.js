class Twitter {
    constructor() {
        this.followMap = {};
        this.tweetMap = {};
        this.count = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.count++;
        if(userId in this.tweetMap){
            this.tweetMap[userId].push([this.count, tweetId]);
        }
        else{
            console.log("Hey");
            this.tweetMap[userId] = [[this.count, tweetId]];
            let tempSet = new Set();
            tempSet.add(userId);
            this.followMap[userId] = tempSet;
        }

    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {

        if(!(userId in this.followMap)){
            let tempSet = new Set();
            tempSet.add(userId);
            this.followMap[userId] = tempSet;
            this.tweetMap[userId] = [];
        }

        let maxHeap = new MaxPriorityQueue((item) => item[0]);
        console.log(this.followMap);
        console.log(this.tweetMap);
        for(const c of this.followMap[userId]){
            if(this.tweetMap[c].length > 0){
            for(const t of this.tweetMap[c]){
                maxHeap.enqueue(t);
            }
            }
        }

        let i = 0;
        let temp = [];

        console.log(maxHeap);

        while(!maxHeap.isEmpty() && i < 10){
            temp.push(maxHeap.dequeue()[1]);
            i++;
        }

        return temp;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(followerId in this.followMap && followerId !== followeeId){
            console.log(true);
            let wtf = this.followMap[followerId].add(followeeId);
        }
        else if(!(followerId in this.followMap) && followerId !== followeeId){
            let tempSet = new Set();
            tempSet.add(followeeId);
            tempSet.add(followerId);
            this.followMap[followerId] = tempSet;
            this.tweetMap[followerId] = [];
        }
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(followerId !== followeeId){
        this.followMap[followerId].delete(followeeId);
        }
    }
}

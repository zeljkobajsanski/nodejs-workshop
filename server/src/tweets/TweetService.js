/**
 * @author Sven Koelpin
 */


const fakeDataBase = require('../db/FakeDatabase');


const getTweets = (start, size) => {
    const allTweets = fakeDataBase.getTweetsTable().sort((a, b) => a.id < b.id);
    return allTweets.slice(start, start + size);
};

const getTweet = id => {
    const tweetId = parseInt(id, 10);
    return fakeDataBase.getTweetsTable().find(tweet => tweet.id === tweetId);
};

const countTweets = () => {
    return fakeDataBase.getTweetsTable().length;
};

const createTweet = tweet => {
    const newTweet = Object.assign(tweet, {id: fakeDataBase.getTweetsTable().length + 1});
    fakeDataBase.getTweetsTable().push(newTweet);
    return newTweet;
};


module.exports = {
    getTweets,
    getTweet,
    countTweets,
    createTweet
};
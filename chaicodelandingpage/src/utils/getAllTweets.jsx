// getAllTweets.js
const tweetImages = import.meta.glob("../assets/tweets/*.{png,jpg,jpeg,svg}", {
  eager: true,
  import: "default",
});

const tweets = Object.keys(tweetImages).map((key, index) => ({
  author: `User ${index + 1}`,
  //   content: `This is tweet number ${index + 1}`,
  height: Math.floor(Math.random() * 3) + 1, // 1 to 3
  image: tweetImages[key],
}));

export default tweets;

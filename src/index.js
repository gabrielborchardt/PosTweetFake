import TweetList from './components/TweetList'
import NewTweet from './components/NewTweet'

const tweetsContainer = 'tweets-container'
const newTweetContainer = 'new-tweet'

const list = new TweetList({tweetsContainer})
const newTweet = new NewTweet({newTweetContainer, tweetsContainer})

newTweet.render()
list.render()
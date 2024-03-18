//Imports
import { User } from "./classes/user";
import { Tweet } from "./classes/tweet";

//Create Users
const fulano = new User("fulano","fulano123","fulano@mail",'senha') 
const ciclano = new User("ciclano","ciclanoLegal","ciclano@mail",'senha') 
const beltrano = new User("beltrano","beltranoDev","beltrano@mail",'senha') 


//Follows
ciclano.follow(fulano)
ciclano.follow(beltrano)


// create tweets
const tweetfulano1 = new Tweet(fulano.username, 'Olá mundo' )
const tweetfulano2 = new Tweet(fulano.username, 'O Growtwitter ta bombando' )
const tweetciclano1 = new Tweet(ciclano.username, `O @${fulano.username} sabe muito` )
const tweetciclano2 = new Tweet(ciclano.username, 'Aprendendo muito na #growdev' )
const tweetbeltrano1 = new Tweet(beltrano.username, 'Foi' )


// sends tweets
fulano.sendTweet(tweetfulano1)
fulano.sendTweet(tweetfulano2)
ciclano.sendTweet(tweetciclano1)
ciclano.sendTweet(tweetciclano2)
beltrano.sendTweet(tweetbeltrano1)


// create replies
const replyToFulanoTweet2 = new Tweet(ciclano.username, 'heheheh' )
const replyToFulanoTweet2_2 = new Tweet(ciclano.username, 'Vai codar!' )


// send replies
tweetfulano2.reply(replyToFulanoTweet2)
tweetfulano2.reply(replyToFulanoTweet2_2)

// show yours tweets
// fulano.showTweets()
// ciclano.showTweets()
// beltrano.showTweets()

// Tweet Like
tweetfulano1.like(ciclano)
tweetfulano1.like(beltrano)
tweetfulano2.like(beltrano)

// show feed followings
ciclano.showFeed(ciclano)  
  

// User list
// console.log(User.allUsers)







import { randomUUID} from 'crypto'
import { Tweet} from '../classes/tweet'


export class User {
    private _id: string = randomUUID();
    private tweets: Tweet[];
    private _following: User[];
    private _followers: User[];
    static feed: Tweet[] = [];
    static allUsers: User[] = [];

    
    constructor(
        public name: string,
        public username: string,
        public email: string,
        public password: string
    ) {
        this.tweets = [];
        this._following = [];
        this._followers = [];
        User.allUsers.push(this);
    }

    public get id(): string {
        return this._id;
    }
    public get following(): User[] {
        return this._following;
    }
    public get followers(): User[] {
        return this._followers;
    }
       
    public sendTweet(tweet: Tweet): void {
        if(tweet.content.length > 0) {
            this.tweets.push(tweet);
            User.feed.push(tweet);
        }
    }


    public follow(user: User) {
        //Usuario nao se seguir e nem seguir alguem novamente
        if (user.name === this.name) {
            console.log(`Você não pode se seguir!`)
        } else {
            const existFollowing = this._following.find(f => f.username === user.username)

            if (existFollowing) {
                console.log(`Você já segue @${existFollowing.username}!`)
            } else {
                const userFollower = User.allUsers.find( u => u.username === user.username)

                console.log(`Você seguiu @${user.username}`)
                this._following.push(user) && userFollower?.followers.push(this)
            }
        }
    }

    public showFeed(user: User){
        if(user){
            user._following.forEach( u => {
               u.showTweets() 
            })
        }

        user.showTweets()

    }

    public showTweets(){
        this.tweets.forEach(tweet => {
            tweet.show()
        });
    }
}
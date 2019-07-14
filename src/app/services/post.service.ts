import {Post } from '../models/post'
export class PostService {

    posts:Array<Post>;
    
    constructor() {
       this. posts=[
           new Post('titre1','contenu1'),
           new Post('titre2','contenu2'),
           new Post('titre3','contenu3')
       ]
    }
    GetPostPoints(index){
        return this.posts[index].points;
    }
    GetPosts(){
        return this.posts;
    }
    UpVote(index:number){
        this.posts[index].points+=1
    }

    DownVote(index:number){
        this.posts[index].points-=1
    }
    GetTotal(){
        let total=0;
        for(let post of this.posts){
            total+=post.points;
        }
        return total;
    }
  }
  
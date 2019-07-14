import { Component, OnInit } from '@angular/core';
import { PostService} from '../services/post.service'
import { Router} from '@angular/router'
import {Post} from '../models/post'
@Component({
  selector: 'app-blog-post-container',
  templateUrl: './blog-post-container.component.html',
  styleUrls: ['./blog-post-container.component.scss']
})
export class BlogPostContainerComponent  {

  posts:PostService;
  router:Router;
    constructor(posts:PostService,router:Router) {
        this.posts=posts;
        this.router=router;
    }
    onClickBlogPost(index:number){
      this.router.navigate(['/blog/'+index])
    }
}

import { Component, OnInit } from '@angular/core';
import { PostService} from '../services/post.service'
import {Post} from '../models/post'
@Component({
  selector: 'app-blog-post-container',
  templateUrl: './blog-post-container.component.html',
  styleUrls: ['./blog-post-container.component.scss']
})
export class BlogPostContainerComponent  {

  posts:PostService;
    constructor(posts:PostService) {
        this.posts=posts
    }

}

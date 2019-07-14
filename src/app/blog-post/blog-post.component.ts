import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent  {

  @Input() posts: PostService;
  @Input() post: Post;
  @Input() index: number;
  style: string;
  router: ActivatedRoute;
  constructor(router: ActivatedRoute,posts:PostService) {
    this.posts=posts;
    this.router = router;
    this.style = "list-group-item list-group-item-secondary"
    let id=this.router.snapshot.params['id'];
    this.index=+id;
    this.post=this.posts.posts[this.index];
  }
  

  setupColor() {
    if (this.posts.GetPostPoints(this.index) == 0) this.style = "list-group-item list-group-item-secondary";
    if (this.posts.GetPostPoints(this.index) > 0) this.style = "list-group-item list-group-item-success";
    if (this.posts.GetPostPoints(this.index) < 0) this.style = "list-group-item list-group-item-danger";

  }
  onUpvote() {
    this.posts.UpVote(this.index);
    this.setupColor();
  }
  onDownvote() {
    this.posts.DownVote(this.index);
    this.setupColor();
  }

}

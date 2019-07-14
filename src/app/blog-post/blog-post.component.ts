import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../models/post';
import {PostService} from '../services/post.service';
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  @Input() posts: PostService;
  @Input() post:Post;
  @Input() index:number;
  style: string;
  constructor() {
    this.style = "list-group-item list-group-item-secondary"
  }

  ngOnInit() {
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

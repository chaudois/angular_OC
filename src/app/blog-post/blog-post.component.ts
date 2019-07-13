import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  points: number;
  created: Date;
  style: string;
  constructor() {
    this.points = 0;
    this.created = new Date();
    this.style = "btn-secondary"
  }

  ngOnInit() {
  }


  setupColor() {
    if (this.points == 0) this.style = "list-group-item-secondary";
    if (this.points > 0) this.style = "list-group-item-success";
    if (this.points < 0) this.style = "list-group-item-danger";

  }
  onUpvote() {
    this.points = this.points + 1;
    this.setupColor();
  }
  onDownvote() {
    this.points = this.points - 1;
    this.setupColor();
  }

}

import { Component } from '@angular/core';
import { PostService} from './services/post.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  posts:PostService;
    constructor(posts:PostService) {
        this.posts=posts
    }

}

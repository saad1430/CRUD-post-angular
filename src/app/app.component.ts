import { Component } from '@angular/core';
import { Post } from './post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  storedPost: Post[] = [];
  onPostAdded(post: Post) {
    this.storedPost.push(post);
  }
}

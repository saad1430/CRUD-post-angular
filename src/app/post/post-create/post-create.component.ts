import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent {
  title: any;
  content: any;
  post: Post[] = [];
  @Output() postCreated = new EventEmitter<Post>();

  onAddPost() {
    const post:Post = {
      title: this.title,
      content: this.content,
    };
    this.postCreated.emit(post);
  }
}

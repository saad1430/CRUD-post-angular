import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent {
  title: any;
  content: any;
  post: { title: string, content: string }[] = [];
  @Output() postCreated = new EventEmitter();

  onAddPost() {
    const post = {
      title: this.title,
      content: this.content,
    };
    this.postCreated.emit(post);
  }
}

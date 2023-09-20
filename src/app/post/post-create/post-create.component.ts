import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent {
  constructor(private _snackBar: MatSnackBar) {}
  openSnackBar(message: string) {
    this._snackBar.open(message, 'X');
  }
  @Output() postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm) {
    if (form.valid) {
      const post: Post = {
        title: form.value.title,
        content: form.value.content,
      };
      this.postCreated.emit(post);
      form.resetForm();
    } else {
      if (
        form.controls['title'].hasError('required')
      ){
        this.openSnackBar('Title is required!')
      }
      else if (
        form.controls['title'].hasError('minlength') &&
        form.controls['title'].touched
      ) {
        this.openSnackBar('Title minimum length is 3.');
      }
      else if (
        form.controls['content'].hasError('required')
      ){
        this.openSnackBar('Content is required!')
      }
      else if (
        form.controls['content'].hasError('minlength') &&
        form.controls['content'].touched
      ) {
        this.openSnackBar('Content minimum length is 10.');
      }
        return;
    }
  }
}

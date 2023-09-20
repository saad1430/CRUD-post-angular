import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  // posts: { title: string; content: string }[] = [];
  @Input() posts: { title: string; content: string }[] = [];
}
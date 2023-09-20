import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  storedPost: { title: string; content: string }[] = [];
  onPostAdded(post: { title: string; content: string }) {
    this.storedPost.push(post);
  }
}

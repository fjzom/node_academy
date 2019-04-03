import { Component, OnInit } from '@angular/core';
import { Post } from '../../common/models/post';
import { PostService } from '../../common/services/post.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  showCreatePostForm: boolean;

  constructor(private postService: PostService, private sanitizer: DomSanitizer) {
    this.showCreatePostForm = false;
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
   this.postService.getPosts()
       .subscribe(posts => this.posts = posts);
  }

  createPost() {
    this.showCreatePostForm = true;
  }

  onSubmitPost(post: Post) {
    this.showCreatePostForm = false;
    this.posts.unshift(post);
  }

  onCancel(): void {
    this.showCreatePostForm = false;
  }
}

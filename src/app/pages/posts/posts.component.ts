import { Component, OnInit } from '@angular/core';
import { Post } from '../../common/models/post';
import { PostService } from '../../common/services/post.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { AddEditModalComponent } from './add-edit-post/add-edit-modal.component';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService, private snackBar: MatSnackBar, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
   this.postService.getPosts()
       .subscribe(posts => this.posts = posts);
  }

  showPostModal(post?: Post) {
    if (!post) {
      post = new Post();
      post.id = this.generateId();
      post.comments = [];
    }
    const dialogRef = this.openDialog(post);
    const prevPost: Post = {...post};
    dialogRef.afterClosed().subscribe((editedPost: Post) => {
      if (editedPost) {
        const postIndex = this.posts.findIndex((postItem) => postItem.id === post.id);
        if (postIndex === -1) {
          this.posts.unshift(editedPost);
          /* TODO: Call API to create post */
        } else {
          /* TODO: Call API to UPDATE a post */
        }
      } else {
        const postIndex = this.posts.findIndex((postItem) => postItem.id === post.id);
        this.posts.splice(postIndex, 1, {...prevPost});
      }
    });
  }

  openDialog(post: Post) {
    return this.dialog.open(AddEditModalComponent, {
      width: '550px',
      data: post
    });
  }

  deletePost(post: Post) {
    const postIndex = this.posts.findIndex((postItem) => postItem.id === post.id);
    let redo = false;
    this.posts.splice(postIndex, 1);
    const snackBarRef = this.snackBar.open(`Post "${post.title}" deleted`, 'UNDO', {
      duration: 3000
    });
    snackBarRef.afterDismissed().subscribe(() => {
      if (!redo) {
        /* TODO: Call API to delete post */
      }
    });
    snackBarRef.onAction().subscribe(() => {
      redo = true;
      this.posts.splice(postIndex, 0, post);
    });
  }

  generateId() {
    return Math.max(...this.posts.map(post => post.id)) + 1;
  }
}


import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/models/post';
import { PostService } from '../shared/services/post.service';
import { MatSnackBar,  MatDialog } from '@angular/material';
import { AddEditModalComponent } from './add-edit-post/add-edit-modal.component';
 
//NEW//
import getBaseUrl from '../../api/baseUrl';
import express from 'express';
import mongoose from 'mongoose'; 
import Postm, {IPostm} from '../../app/shared/models/post.model';
import chalk from 'chalk';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  categories: string[];
  selectedCategory: string; 
  constructor(private postService: PostService, private snackBar: MatSnackBar, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getPosts();
    this.getCategories();
    this.selectedCategory = 'All';
  }

  public onValChange(val: string) {
    this.selectedCategory = val;
  }

  getPosts(): void {
   this.postService.getPosts()
       .subscribe(posts => this.posts = posts);
  }
  //NEW// 
  addNewPost(post: Post): void{    
    this.postService.savePost(post);
  }
  getCategories(): void {
    this.postService.getCategories()
        .subscribe(categories => this.categories = categories);
  }

  showPostModal(post?: Post) {
    if (!post) {
      post = new Post();
      post.id = this.generateId();
      post.image = 'https://source.unsplash.com/random';
      post.comments = [];
    }
    const dialogRef = this.openDialog(post);
    const prevPost: Post = {...post};
    dialogRef.afterClosed().subscribe((editedPost: Post) => {
      if (editedPost) {
        const postIndex = this.posts.findIndex((postItem) => postItem.id === post.id);
        if (postIndex === -1) {
          this.posts.unshift(editedPost);
          this.selectedCategory = 'All';
          /* TODO: Call API to create post */
          //NEW//
          this.addNewPost(editedPost);

        } else {
          /* TODO: Call API to UPDATE a post */
        }
      } else {
        const postIndex = this.posts.findIndex((postItem) => postItem.id === post.id);
        if (postIndex !== -1) {
          this.posts[postIndex] = prevPost;
        }
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
    const snackBarRef = this.snackBar.open(`Deleted Post: "${post.title}"`, 'UNDO', {
      duration: 4000,
      panelClass: 'snack-bar'
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

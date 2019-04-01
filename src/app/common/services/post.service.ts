import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable, of } from 'rxjs';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsCache: Post[];

  constructor() {
    this.postsCache = [];
   }

  getPosts(): Observable<Post[]> {
    const p = new Post();
    p.id = 99;
    p.title = 'The waves are high & beautiful';
    p.description = 'Meh synth Schlitz, tempor duis single-origin coffee ea next level eth';
    p.category = 'Travel';
    p.publishedDate = new Date('2014-11-11T08:40:51.620Z');
    p.comments = [{
        author: 'Jon Doe',
        id: 1,
        content: 'hi'
      }];
    this.postsCache = [p];
    return of(this.postsCache);
  }

  getPost(postId: number): Observable<Post> {
    const cachedPost: Post = this.postsCache.find(postItem => postItem.id === postId);
    if (cachedPost) {
      return of(cachedPost);
    } else {
      return of (new Post());
    }
  }
}

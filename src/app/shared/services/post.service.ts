import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
//NEW//
import mongoose from 'mongoose';
import Postm, {IPostm} from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl_Reloded: string;
  cachedPosts: Post[];
  cachedCategories: string[];
  baseUrl: string; 
  //NEW//
  //const db = mongoose.connect('mongodb://localhost:27017/angularAcademyDB', {useNewUrlParser: true}, function (err) {
 

  constructor( private http: HttpClient) {
    this.baseUrl = 'https://private-c3edb-postsmock.apiary-mock.com';
    this.cachedPosts = [];
    this.cachedCategories = []; 
   }

  getPosts(): Observable<Post[]> {
    if (this.cachedPosts.length) {
      return of(this.cachedPosts);
    }
    return this.http.get<Post[]>(`${this.baseUrl}/posts`)
      .pipe(
        tap(posts => this.cachedPosts = posts),
        catchError(this.handleError<Post[]>('getPosts', []))
      );
  }
   
  

  getPost(postId: number): Observable<Post> {
    const cachedPost: Post = this.cachedPosts.find(postItem => postItem.id === postId);
    if (cachedPost) {
      return of(cachedPost);
    } else {
      return this.http.get<Post>(`${this.baseUrl}/posts/${postId}`)
        .pipe(
          catchError(this.handleError<Post>('getPost', new Post()))
        );
    }
  }

  getCategories(): Observable<string[]> {
    if (this.cachedCategories.length) {
      return of(this.cachedCategories);
    }
    return this.http.get<string[]>(`${this.baseUrl}/categories`)
      .pipe(
        tap(posts => this.cachedCategories = posts),
        catchError(this.handleError<string[]>('getCategories', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

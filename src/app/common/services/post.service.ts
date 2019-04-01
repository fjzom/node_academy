import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  cachedPosts: Post[];
  postsUrl: string;

  constructor( private http: HttpClient) {
    this.postsUrl = 'https://private-c3edb-postsmock.apiary-mock.com/posts';
    this.cachedPosts = [];
   }

  getPosts(): Observable<Post[]> {
    if (this.cachedPosts.length) {
      return of(this.cachedPosts);
    }
    return this.http.get<Post[]>(this.postsUrl)
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
      return this.http.get<Post>(`${this.postsUrl}/${postId}`)
        .pipe(
          catchError(this.handleError<Post>('getPost', new Post()))
        );
    }
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './models/post';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  postId;
  commentId;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getComments(id) {
    this.postId = id;
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + this.postId + '/comments');
  }

  deleteComment(id) {
    this.commentId = id;
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + this.postId + '/comments' + this.commentId);
  }
}

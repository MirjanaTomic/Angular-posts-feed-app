import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  postId;
  commentId;

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.postsUrl);
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

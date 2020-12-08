import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts;
  userId;
  userInfo;
  commentId;
  comments;

  constructor(private service: PostsService, private http: HttpClient) { }

  ngOnInit() {
    this.service.getPosts().subscribe((response: any[]) => {
      this.posts = response;
      response.forEach(item => {
        this.userId = item.userId;
        this.comments = null;
        // this.commentId = item.id;
        this.http.get('https://jsonplaceholder.typicode.com/users' + '/' + this.userId).subscribe(res => {
          this.userInfo = res;
          // this.posts.push(this.userInfo);
          // console.log(this.posts);
        });
      
      });
    });
  }

  showComments(event: Event, postId) {
    event.preventDefault();
    console.log('radi', postId);
    this.service.getComments(postId).subscribe(res => {
      this.comments = res;
    });
  }

  deleteComment(id) {
    console.log('obrisan');
  }
}

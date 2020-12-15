import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts = [];
  userId;
  userInfo;
  commentId;
  comments;
  _postId: number;

  constructor(private service: PostsService, private http: HttpClient) { }

  ngOnInit() {
    this.service.getPosts().subscribe(
      data => {
        this.posts = data;
      }
    )

    // TO DO - get User by making a sequential GET request after getting the user, merge into one observable, display User details under the post body
    // TO DO - move getting the User logic to the service
    // this.service.getPosts().subscribe((response: any[]) => {
    //   this.posts = response;
    //   response.forEach(item => {
    //     this.userId = item.userId;
    //     this.comments = null;
    //     // this.commentId = item.id;
    //     this.http.get('https://jsonplaceholder.typicode.com/users' + '/' + this.userId).subscribe(res => {
    //       this.userInfo = res;
    //       // this.posts.push(this.userInfo);
    //     });
      
    //   });
    // });
  }

  showComments(event: Event, postId: number) {
    // TO DO - preserve fetched comments on respective posts
    this._postId = postId;
    this.service.getComments(postId).subscribe(res => {
      this.comments = res;
    });
  }

  deleteComment(id: number) {
    // TO DO remove deleted comment from the UI and send DELETE request to jsonplaceholder.typicode.com from the service
    alert('Deleting of comments not developed yet');
  }
}

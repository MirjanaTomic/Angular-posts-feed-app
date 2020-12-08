import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostsService } from './posts.service';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
  BrowserModule,
    HttpClientModule
  ],
  providers: [ PostsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

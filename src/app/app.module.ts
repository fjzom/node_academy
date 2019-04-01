import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './pages/posts/posts.component';
import { HeaderComponent } from './common/components/header/header.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

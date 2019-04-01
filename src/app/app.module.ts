import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './pages/posts/posts.component';
import { HeaderComponent } from './common/components/header/header.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditPostComponent } from './pages/posts/add-edit-post/add-edit-post.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    PostDetailComponent,
    AddEditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

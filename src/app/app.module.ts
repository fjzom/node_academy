import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatSnackBarModule,
  MatDialogModule,
  MatButtonToggleModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './pages/posts/posts.component';
import { HeaderComponent } from './common/components/header/header.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from './pages/posts/post/post.component';
import {IconCommentsComponent } from './common/components/icons/icons.component';
import { AddEditModalComponent } from './pages/posts/add-edit-post/add-edit-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    PostDetailComponent,
    AddEditModalComponent,
    PostComponent,
    IconCommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonToggleModule
  ],
  entryComponents: [AddEditModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

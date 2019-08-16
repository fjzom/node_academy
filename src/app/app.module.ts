import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatDialogModule,
  MatButtonToggleModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostComponent } from './post-list/post/post.component';
import {IconCommentsComponent } from './shared/components/icons/icons.component';
import { AddEditModalComponent } from './post-list/add-edit-post/add-edit-modal.component';
import { FilterPostPipe } from './shared/pipes/filter-post.pipe';
import { PostService } from './shared/services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HeaderComponent,
    PostDetailComponent,
    AddEditModalComponent,
    PostComponent,
    IconCommentsComponent,
    FilterPostPipe
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
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonToggleModule
  ],
  entryComponents: [AddEditModalComponent],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

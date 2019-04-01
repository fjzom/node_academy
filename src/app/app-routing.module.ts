import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

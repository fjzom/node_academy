import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../common/models/post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/common/services/post.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Comment } from 'src/app/common/models/comment';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  form: FormGroup;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      comment: new FormControl('', Validators.required)
    });
    this.getPost();
  }

  onSubmit(): void {
    if (this.form.valid) {
      const comment: Comment = {
        id: new Date().getMilliseconds(),
        content: this.form.controls.comment.value,
        author: 'Joe Doe'
      };
      this.post.comments.push(comment);
      this.form.reset();
    }
  }

  getPost(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id)
      .subscribe(post => this.post = post);
  }
}

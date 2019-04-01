import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../common/models/post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/common/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id)
      .subscribe(post => this.post = post);
  }
}

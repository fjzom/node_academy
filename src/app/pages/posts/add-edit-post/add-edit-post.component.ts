import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from 'src/app/common/models/post';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.scss']
})
export class AddEditPostComponent implements OnInit {
  categories: string[];
  form: FormGroup;
  @Output() submitPost: EventEmitter<Post>;
  @Output() cancel: EventEmitter<void>;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required],
    });
    this.categories = [
      'Travel', 'Lifestyle'
    ];
    this.submitPost = new EventEmitter<Post>();
    this.cancel = new EventEmitter();
   }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.form.valid) {
      const post = new Post();
      post.title = this.form.controls.title.value;
      post.description = this.form.controls.description.value;
      post.shortDescription = post.description;
      post.category = this.form.controls.category.value;
      post.image = this.form.controls.image.value;
      post.comments = [];
      this.submitPost.emit(post);
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}

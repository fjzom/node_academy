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

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required]
    });
    this.categories = [
      'Travel', 'Lifestyle'
    ];
    this.submitPost = new EventEmitter<Post>();
   }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitPost.emit({
        ...new Post(),
        title: this.form.controls.title.value
      });
    } else {
      console.log('Form not valid');
    }
  }

}

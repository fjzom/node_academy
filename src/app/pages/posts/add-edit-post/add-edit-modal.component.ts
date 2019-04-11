import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { Post } from 'src/app/common/models/post';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PostService } from 'src/app/common/services/post.service';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.scss']
})
export class AddEditModalComponent {
  categories: string[];
  isNewPost: boolean;
  @Output() submitPost: EventEmitter<Post>;
  @Output() cancel: EventEmitter<void>;

  constructor(public dialogRef: MatDialogRef<AddEditModalComponent>, public postService: PostService,
              @Inject(MAT_DIALOG_DATA) public post: Post) {

    if (!this.post.title) {
      this.isNewPost = true;
    }

    this.postService.getCategories()
        .subscribe(categories => this.categories = categories);

    this.submitPost = new EventEmitter<Post>();
    this.cancel = new EventEmitter();
   }

  onCancel() {
    this.dialogRef.close();
  }
}

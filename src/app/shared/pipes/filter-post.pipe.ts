import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post';

@Pipe({
  name: 'filterPost'
})

export class FilterPostPipe implements PipeTransform {
  transform(posts: Post[], category: string): Post[] {
    if (!posts) {
      return [];
    }
    if (category === 'All') {
      return posts;
    } else {
      return posts.filter(post => {
        return post.category.toUpperCase() === category.toUpperCase();
      });
    }
  }
}

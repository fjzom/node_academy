import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../../common/models/post';

@Pipe({
  name: 'filterPost'
})

export class FilterPipe implements PipeTransform {
  transform(items: Post[], category: string): Post[] {
    if (!items) {
      return [];
    }
    if (category === 'All') {
      return items;
    } else {
      return items.filter(item => {
        return item.category.toUpperCase() === category.toUpperCase();
      });
    }
  }
}

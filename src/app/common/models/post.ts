import { Comment } from './comment';

export class Post {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  publishedAt: Date;
  category: string;
  comments: Comment[];
}

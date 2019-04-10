import { Comment } from './comment';

export class Post {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  publishedAt: string;
  category: string;
  image: string;
  comments: Comment[];
}

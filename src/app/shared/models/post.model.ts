import { Comment } from './comment';
import mongoose, { Schema } from 'mongoose';

export interface IPostm extends Document {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  publishedAt: string;
  category: string;
  image: string;
  comments: Comment[];
}

const PostmSchema: Schema = new Schema({
  id: { type: Number },
  title: { tpye: String },
  shortDescription: { tpye: String },
  description: { tpye: String },
  publishedAt: { tpye: String },
  category: { tpye: String },
  image: { tpye: String },
  comments: { type: Comment[''] }
});


// Export the model and return your IPostm interface
export default mongoose.model<IPostm>('Postm', PostmSchema);
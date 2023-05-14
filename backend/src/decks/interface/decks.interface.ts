import { Document } from 'mongoose';

export interface IDeck extends Document {
  name: string;
  title: [string];
}

import { Document } from 'mongoose';

export interface IDeck extends Document {
  title: string;
  cards: string;
  // cards: [string];
}

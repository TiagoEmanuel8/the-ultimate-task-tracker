import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DeckDocument = HydratedDocument<Deck>;

@Schema()
export class Deck {
  @Prop()
  title: string;

  @Prop([String])
  cards: string[];
}

export const DeckSchema = SchemaFactory.createForClass(Deck);

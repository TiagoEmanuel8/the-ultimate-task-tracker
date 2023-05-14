import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Deck {
  @Prop()
  title: string;
  @Prop()
  cards: [string];
}

export const DeckSchema = SchemaFactory.createForClass(Deck);

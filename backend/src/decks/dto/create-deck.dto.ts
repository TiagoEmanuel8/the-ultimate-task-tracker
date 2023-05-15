import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDeckDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  cards: string;
  // cards: [string];
}

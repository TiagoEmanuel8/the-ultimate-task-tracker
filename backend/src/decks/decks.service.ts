import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDeckDto } from './dto/create-deck.dto';
import { Deck } from './schema/deck.schema';
// import { IDeck } from './interface/decks.interface';
import { Model } from 'mongoose';
import { UpdateDeckDto } from './dto/update-deck.dto';

@Injectable()
export class DecksService {
  constructor(@InjectModel(Deck.name) private deckModel: Model<Deck>) {}

  async create(createDeckDto: CreateDeckDto) {
    const createdTask = new this.deckModel(createDeckDto);
    return createdTask.save();
  }

  async findAll() {
    const deckData = await this.deckModel.find();
    if (!deckData || deckData.length == 0) {
      throw new NotFoundException('Tasks data not found!');
    }
    return deckData;
  }

  findOne(id: number) {
    return `This action returns a #${id} deck`;
  }

  update(id: number, updateDeckDto: UpdateDeckDto) {
    return `This action updates a #${id} deck`;
  }

  remove(id: number) {
    return `This action removes a #${id} deck`;
  }
}

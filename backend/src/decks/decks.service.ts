import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDeckDto } from './dto/create-deck.dto';
import { Deck } from './schema/deck.schema';
import { IDeck } from './interface/decks.interface';
import { Model } from 'mongoose';
import { UpdateDeckDto } from './dto/update-deck.dto';

@Injectable()
export class DecksService {
  constructor(@InjectModel(Deck.name) private deckModel: Model<Deck>) {}

  async create(createDeckDto: CreateDeckDto): Promise<IDeck> {
    const createdTask = new this.deckModel(createDeckDto);
    return createdTask.save();
  }

  async findAll(): Promise<IDeck[]> {
    const deckData = await this.deckModel.find();
    if (!deckData || deckData.length == 0) {
      throw new NotFoundException('Tasks data not found!');
    }
    return deckData;
  }

  async findOne(deckId: string) {
    const deck = await this.deckModel.findById(deckId).exec();
    if (!deck) {
      throw new NotFoundException(`Deck #${deck} not found`);
    }
    return deck;
  }

  async update(deckId: string, updateDeckDto: UpdateDeckDto) {
    const updateDeck = await this.deckModel.findByIdAndUpdate(
      deckId,
      updateDeckDto,
      { new: true },
    );
    if (!updateDeck) {
      throw new NotFoundException(`Deck #${updateDeck} not found`);
    }
    return updateDeck;
  }

  async remove(deckId: string) {
    const deletedDeck = await this.deckModel.findByIdAndDelete(deckId);
    if (!deletedDeck) {
      throw new NotFoundException(`Deck #${deletedDeck} not found`);
    }
    return deletedDeck;
  }
}

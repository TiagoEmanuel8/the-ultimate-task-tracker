import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { DecksService } from './decks.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';

@Controller('decks')
export class DecksController {
  constructor(private readonly decksService: DecksService) {}

  @Post()
  async create(@Res() response, @Body() createDeckDto: CreateDeckDto) {
    try {
      console.log(createDeckDto);
      const newDeck = await this.decksService.create(createDeckDto);
      return response.status(HttpStatus.CREATED).json(newDeck);
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Task not created!',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async findAll(@Res() response) {
    try {
      const decks = await this.decksService.findAll();
      return response.status(HttpStatus.OK).json(decks);
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async findOne(@Res() response, @Param('id') deckId: string) {
    try {
      const deck = await this.decksService.findOne(deckId);
      return response.status(HttpStatus.OK).json(deck);
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Patch(':id')
  async update(
    @Res() response,
    @Param('id') deckId: string,
    @Body() UpdateDeckDto: UpdateDeckDto,
  ) {
    try {
      const existingStudent = await this.decksService.update(
        deckId,
        UpdateDeckDto,
      );
      return response.status(HttpStatus.OK).json(existingStudent);
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete(':id')
  async remove(@Res() response, @Param('id') deckId: string) {
    try {
      const deck = await this.decksService.remove(deckId);
      return response.status(HttpStatus.OK).json(deck);
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}

import { Module } from '@nestjs/common';
import { DecksModule } from './decks/decks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'decksdb',
    }),
    DecksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

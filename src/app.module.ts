import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Book } from './entities/book.entity';
import { AuthorService } from './services/author.service';
import { BookService } from './services/book.service';
import { AuthorController } from './controllers/author.controller';
import { BookController } from './controllers/book.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Author, Book],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Author, Book]),
  ],
  controllers: [AuthorController, BookController],
  providers: [AuthorService, BookService],
})
export class AppModule {}

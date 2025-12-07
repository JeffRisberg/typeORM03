import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entities/book.entity';
import { Author } from '../entities/author.entity';
import { CreateBookDto } from '../dto/create-book.dto';
import { UpdateBookDto } from '../dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const author = await this.authorRepository.findOne({
      where: { id: createBookDto.authorId },
    });
    if (!author) {
      throw new NotFoundException(`Author with ID ${createBookDto.authorId} not found`);
    }

    const book = this.bookRepository.create({
      title: createBookDto.title,
      publicationDate: new Date(createBookDto.publicationDate),
      pageCount: createBookDto.pageCount,
      author: author,
    });
    return this.bookRepository.save(book);
  }

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find({ relations: ['author'] });
  }

  async findOne(id: number): Promise<Book> {
    const book = await this.bookRepository.findOne({
      where: { id },
      relations: ['author'],
    });
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    const book = await this.findOne(id);

    if (updateBookDto.authorId) {
      const author = await this.authorRepository.findOne({
        where: { id: updateBookDto.authorId },
      });
      if (!author) {
        throw new NotFoundException(`Author with ID ${updateBookDto.authorId} not found`);
      }
      book.author = author;
    }

    if (updateBookDto.title) {
      book.title = updateBookDto.title;
    }
    if (updateBookDto.publicationDate) {
      book.publicationDate = new Date(updateBookDto.publicationDate);
    }
    if (updateBookDto.pageCount) {
      book.pageCount = updateBookDto.pageCount;
    }

    return this.bookRepository.save(book);
  }

  async remove(id: number): Promise<void> {
    const book = await this.findOne(id);
    await this.bookRepository.remove(book);
  }
}

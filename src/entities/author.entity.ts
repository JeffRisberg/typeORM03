import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  birthYear: number;

  @Column('text')
  bio: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}

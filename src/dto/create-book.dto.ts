import { IsString, IsNumber, IsNotEmpty, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ description: 'The title of the book' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'The publication date of the book (YYYY-MM-DD)' })
  @IsDateString()
  @IsNotEmpty()
  publicationDate: string;

  @ApiProperty({ description: 'The number of pages in the book' })
  @IsNumber()
  @IsNotEmpty()
  pageCount: number;

  @ApiProperty({ description: 'The ID of the author' })
  @IsNumber()
  @IsNotEmpty()
  authorId: number;
}

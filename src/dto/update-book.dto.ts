import { IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto {
  @ApiProperty({ description: 'The title of the book', required: false })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({ description: 'The publication date of the book (YYYY-MM-DD)', required: false })
  @IsDateString()
  @IsOptional()
  publicationDate?: string;

  @ApiProperty({ description: 'The number of pages in the book', required: false })
  @IsNumber()
  @IsOptional()
  pageCount?: number;

  @ApiProperty({ description: 'The ID of the author', required: false })
  @IsNumber()
  @IsOptional()
  authorId?: number;
}

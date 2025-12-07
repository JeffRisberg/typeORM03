import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAuthorDto {
  @ApiProperty({ description: 'The name of the author', required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ description: 'The birth year of the author', required: false })
  @IsNumber()
  @IsOptional()
  birthYear?: number;

  @ApiProperty({ description: 'The biography of the author', required: false })
  @IsString()
  @IsOptional()
  bio?: string;
}

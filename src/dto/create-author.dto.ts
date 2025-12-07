import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {
  @ApiProperty({ description: 'The name of the author' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'The birth year of the author' })
  @IsNumber()
  @IsNotEmpty()
  birthYear: number;

  @ApiProperty({ description: 'The biography of the author' })
  @IsString()
  @IsNotEmpty()
  bio: string;
}

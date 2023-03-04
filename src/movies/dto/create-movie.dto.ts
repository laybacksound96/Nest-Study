import { IsString } from 'class-validator';
import {
  IsNumber,
  IsOptional,
} from 'class-validator/types/decorator/decorators';

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}

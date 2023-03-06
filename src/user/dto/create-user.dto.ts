import { IsString, IsArray } from 'class-validator';
import { Character } from '../schema/Character.schema';

export class CreateUserDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsArray()
  Characters?: Character[];
}

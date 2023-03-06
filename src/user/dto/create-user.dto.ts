import { Type } from 'class-transformer';
import { IsString, IsArray, ValidateNested } from 'class-validator';
import { CreateCharacterDto } from './create-character.dto';

export class CreateUserDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly name: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCharacterDto)
  readonly Characters: CreateCharacterDto[];
}

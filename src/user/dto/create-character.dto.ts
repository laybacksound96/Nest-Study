import {
  IsString,
  IsArray,
  IsOptional,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';

export class CreateCharacterDto {
  @IsNotEmpty()
  @IsString()
  ServerName: string;

  @IsNotEmpty()
  @IsString()
  CharacterName: string;

  @IsNotEmpty()
  @IsNumber()
  CharacterLevel: number;

  @IsNotEmpty()
  @IsString()
  CharacterClassName: string;

  @IsNotEmpty()
  @IsString()
  ItemAvgLevel: string;

  @IsNotEmpty()
  @IsString()
  ItemMaxLevel: string;

  @IsOptional()
  @IsArray()
  Commander: [];
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Commander, CommanderSchema } from './Commander.schema';

export type CharacterDocument = HydratedDocument<Character>;

@Schema()
export class Character {
  @Prop({ required: true })
  ServerName: string;

  @Prop({ required: true })
  CharacterName: string;

  @Prop({ required: true })
  CharacterLevel: number;

  @Prop({ required: true })
  CharacterClassName: string;

  @Prop({ required: true })
  ItemAvgLevel: string;

  @Prop({ required: true })
  ItemMaxLevel: string;

  @Prop({ required: true, type: [{ type: CommanderSchema, ref: 'Commander' }] })
  Commander: Commander[];
}
export const CharacterSchema = SchemaFactory.createForClass(Character);

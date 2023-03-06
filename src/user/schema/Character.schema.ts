import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Commander } from './Commander.schema';

export type CharacterDocument = HydratedDocument<Character>;
@Schema()
export class Character {
  @Prop()
  ServerName: string;

  @Prop()
  CharacterName: string;

  @Prop()
  CharacterLevel: number;

  @Prop()
  CharacterClassName: string;

  @Prop()
  ItemAvgLevel: string;

  @Prop()
  ItemMaxLevel: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Commander' }] })
  Commander: Commander[];
}
export const CharacterSchema = SchemaFactory.createForClass(Character);

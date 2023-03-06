import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Character } from './Character.schema';
import * as mongoose from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }] })
  Characters?: Character[];
}
export const UserSchema = SchemaFactory.createForClass(User);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Character, CharacterSchema } from './Character.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: CharacterSchema, ref: 'Character' }] })
  Characters: Character[];
}

const UserSchema = SchemaFactory.createForClass(User);
UserSchema.pre('save', async function (next) {
  console.log(this.Characters);
  next();
});

export { UserSchema };

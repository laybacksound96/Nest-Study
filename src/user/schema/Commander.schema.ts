import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommanderDocument = HydratedDocument<Commander>;
@Schema()
export class Commander {
  @Prop()
  valtan: string;

  @Prop()
  vykas: string;
}
export const CommanderSchema = SchemaFactory.createForClass(Commander);

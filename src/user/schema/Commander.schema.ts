import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Gate, GateSchema } from './Gate.schema';

export type CommanderDocument = HydratedDocument<Commander>;

@Schema()
export class Commander {
  @Prop({ required: true, type: [{ type: GateSchema, ref: 'Gate' }] })
  valtan: Gate[];

  @Prop({ required: true, type: [{ type: GateSchema, ref: 'Gate' }] })
  vykas: Gate[];
}

export const CommanderSchema = SchemaFactory.createForClass(Commander);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type GateDocument = HydratedDocument<Gate>;
@Schema()
export class Gate {
  @Prop()
  gateIndex: number;
  @Prop({ required: true, default: false })
  isHardDifficulty: boolean;
  @Prop({ required: true, default: false })
  isChecked: boolean;
}
const GateSchema = SchemaFactory.createForClass(Gate);

export { GateSchema };

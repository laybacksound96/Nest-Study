import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
export type GateDocument = HydratedDocument<Gate>;
@Schema()
export class Gate {
  @Prop({ type: Number, unique: true })
  gateIndex: number;
  @Prop({ required: true, default: false })
  isHardDifficulty: boolean;
  @Prop({ required: true, default: false })
  isChecked: boolean;
}
const GateSchema = SchemaFactory.createForClass(Gate);

export { GateSchema };

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class RefreshToken extends Document {
  @Prop({ required: true })
  token: string;

  @Prop({ required: true, index: true })
  owner: string;

  @Prop({ required: true, index: true })
  enabled: boolean;

  @Prop({ required: true })
  exp: Date;
}

export const RefreshTokenSchema = SchemaFactory.createForClass(RefreshToken);

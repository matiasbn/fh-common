import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class Proportion {
  productId: string;
  amount: number;
}

@Schema({ timestamps: true })
export class Recipe extends Document {
  _id?: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  proportions: Proportion[];
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);

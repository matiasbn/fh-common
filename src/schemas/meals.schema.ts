import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Meal extends Document {
  @Prop({ required: true })
  recipeId: string;

  @Prop({ required: true })
  proteins: number;

  @Prop({ required: true })
  fat: number;

  @Prop({ required: true })
  carbohydrates: number;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  calories: number;
}

export const MealSchema = SchemaFactory.createForClass(Meal);

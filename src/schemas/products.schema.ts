import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Aisle } from "@enums";

@Schema({ timestamps: true })
export class Product extends Document {
  _id?: string;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  name: string;

  @Prop({})
  nutritionalInformation: {
    macronutrients: {
      proteins: number;
      fat: number;
      carbohydrate: number;
    };
    detail?: {
      proteins: object;
      fat: object;
      carbohydrate: object;
    };
  };

  @Prop({ required: true })
  energy: number;

  @Prop({ required: true })
  pricePerKg: number;

  @Prop({})
  aisle: Aisle;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Product } from "./products.schema";
import { Meal } from "./meals.schema";
import { Recipe } from "./recipes.schema";
import { UserProfile } from "@enums";

@Schema({ timestamps: true })
export class User extends Document {
  _id?: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ index: true, unique: true, required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: false })
  profile: UserProfile;

  @Prop([
    {
      type: MongooseSchema.Types.ObjectId,
      ref: Product.name,
      required: true,
    },
  ])
  products: string[];

  @Prop([
    {
      type: MongooseSchema.Types.ObjectId,
      ref: Recipe.name,
      required: true,
    },
  ])
  recipes: string[];

  @Prop([
    {
      type: MongooseSchema.Types.ObjectId,
      ref: Meal.name,
      required: true,
    },
  ])
  meals: string[];
}

export const UsersSchema = SchemaFactory.createForClass(User);

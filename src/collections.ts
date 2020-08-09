import { Product, ProductSchema } from '@schemas/products.schema';
import { User, UsersSchema } from '@schemas/users.schema';
import { Recipe, RecipeSchema } from '@schemas/recipes.schema';
import { Meal, MealSchema } from '@schemas/meals.schema';
import {
  RefreshToken,
  RefreshTokenSchema,
} from './schemas/refresh-token.schema';

export const Collections = {
  PRODUCTS: {
    name: Product.name,
    schema: ProductSchema,
    collection: 'fh-products',
  },
  USERS: { name: User.name, schema: UsersSchema, collection: 'fh-users' },
  RECIPES: {
    name: Recipe.name,
    schema: RecipeSchema,
    collection: 'fh-recipes',
  },
  MEALS: {
    name: Meal.name,
    schema: MealSchema,
    collection: 'fh-meals',
  },
  REFRESH_TOKENS: {
    name: RefreshToken.name,
    schema: RefreshTokenSchema,
    collection: 'fh-refresh-tokens',
  },
};

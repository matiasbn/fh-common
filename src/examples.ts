import { Aisle, PortionUnit, UserProfile } from '@utils/enums';
import { Product } from '@schemas/products.schema';
import { User } from '@schemas/users.schema';
import { Recipe } from '@schemas/recipes.schema';
import { Meal } from '@schemas/meals.schema';

export const testProduct: Product = {
  brand: 'Lider',
  name: 'Atún',
  nutritionalInformation: {
    macronutrients: {
      proteins: 1,
      fat: 1,
      carbohydrate: 1,
    },
    detail: {
      proteins: {},
      fat: {},
      carbohydrate: {},
    },
  },
  pricePerKg: 3000,
  energy:1,
  aisle: Aisle.CANNED_PRODUCTS,
};

export const testUser: User = {
  name: 'Rosalis',
  lastname: 'Pulido',
  email: 'hola@hola.cl',
  password: 'hola',
  profile: UserProfile.USER,
  products: [],
  recipes: [],
  meals: [],
};

export const testRecipe: Recipe = {
  author: 'userId',
  proportions: [],
};

export const testMeal: Meal = {
  recipeId: 'recipeId',
  proteins: 100,
  fat: 100,
  carbohydrates: 100,
  price: 1000,
  calories: 1700,
};

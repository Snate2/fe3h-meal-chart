// Angular
import { Injectable } from '@angular/core';

// Interfaces
import { IMeal } from '../../interfaces/meal-chart.interface';

// Services
import { MealChartStateService } from '../state/meal-chart-state.service';

@Injectable()
export class MealChartMealInitializerService {
  constructor(
    private readonly mealChartStateService: MealChartStateService,
  ) {}

  initializeMeals() {
    const meals: IMeal[] = [
      {
        name: `Beast Meat Teppanyaki`,
        ingredients: [''],
      },
      {
        name: `Grilled Herring`,
        ingredients: [''],
      },
      {
        name: `Saghert and Cream`,
        ingredients: [''],
      },
      {
        name: `Fish and Bean Soup`,
        ingredients: [''],
      },
      {
        name: `Vegetable Pasta Salad`,
        ingredients: [''],
      },
      {
        name: `Small Fish Skewers`,
        ingredients: [''],
      },
      {
        name: `Sautéed Jerky`,
        ingredients: [''],
      },
      {
        name: `Spicy Fish and Turnip Stew`,
        ingredients: [''],
      },
      {
        name: `Onion Gratin Soup`,
        ingredients: [''],
      },
      {
        name: `Sweet and Salty Whitefish Sauté`,
        ingredients: [''],
      },
      {
        name: `Sweet Bun Trio`,
        ingredients: [''],
      },
      {
        name: `Fruit and Herring Tart`,
        ingredients: [''],
      },
      {
        name: `Garreg Mach Meat Pie`,
        ingredients: [''],
      },
      {
        name: `Fisherman's Bounty`,
        ingredients: [''],
      },
      {
        name: `Pheasant Roast with Berry Sauce`,
        ingredients: [''],
      },
      {
        name: `Cheesy Verona Stew`,
        ingredients: [''],
      },
      {
        name: `Fish Sandwich`,
        ingredients: [''],
      },
      {
        name: `Pickled Rabbit Skewers`,
        ingredients: [''],
      },
      {
        name: `Country-Style Red Turnip Plate`,
        ingredients: [''],
      },
      {
        name: `Super-Spicy Fish Dango`,
        ingredients: [''],
      },
      {
        name: `Peach Sorbet`,
        ingredients: [''],
      },
      {
        name: `Pickled Seafood and Vegetables`,
        ingredients: [''],
      },
      {
        name: `Two-Fish Sauté`,
        ingredients: [''],
      },
      {
        name: `Daphnel Stew`,
        ingredients: [''],
      },
      {
        name: `Gronder Meat Skewers`,
        ingredients: [''],
      },
      {
        name: `Sautéed Pheasant and Eggs`,
        ingredients: [''],
      },
      {
        name: `Gautier Cheese Gratin`,
        ingredients: [''],
      },
      {
        name: `Cabbage and Herring Stew`,
        ingredients: [''],
      },
      {
        name: `Vegetable Stir-Fry`,
        ingredients: [''],
      },
      {
        name: `Bourgeois Pike`,
        ingredients: [''],
      },
      {
        name: `Fried Crayfish`,
        ingredients: [''],
      },
      {
        name: `Derdriu-Style Fried Pheasant`,
        ingredients: [''],
      },
    ];

    this.mealChartStateService.setMeals(meals);
  }
}

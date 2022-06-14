// Angular
import { Injectable } from '@angular/core';

// Interfaces
import { ICharacter, IMeal } from '../../interfaces/meal-chart.interface';

@Injectable()
export class MealChartLogicService {
  checkIfCharacterIsSelected(selectedCharacters: ICharacter[], name: string): number {
    return selectedCharacters.findIndex((selectedCharacter: ICharacter) => {
      return selectedCharacter.name === name;
    });
  }

  findMatchingMeals(firstCharacter: ICharacter, secondCharacter: ICharacter): IMeal[] {
    const favoredMeals: IMeal[] = [];

    firstCharacter.favoriteMeals.forEach((firstCharacterMeal: IMeal) => {
      const matchingMeal = secondCharacter.favoriteMeals.find((secondCharacterMeal: IMeal) => {
        return firstCharacterMeal.name === secondCharacterMeal.name;
      });

      if (matchingMeal) {
        favoredMeals.push(matchingMeal);
      }

    });

    return favoredMeals;
  }
}

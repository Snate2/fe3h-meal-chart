// Angular
import { Injectable } from '@angular/core';

// Interfaces
import { ICharacter, IMeal } from '../../interfaces/meal-chart.interface';

// Services
import { MealChartLogicService } from '../logic/meal-chart-logic.service';

@Injectable()
export class MealChartAdapterService {
  private readonly MAX_CHARACTERS = 2;

  constructor(
    private readonly mealChartLogicService: MealChartLogicService,
  ) {}

  selectCharacter(selectedCharacters: ICharacter[], character: ICharacter): ICharacter[] {
    const charIndex = this.mealChartLogicService.checkIfCharacterIsSelected(selectedCharacters, character.name);
    if (charIndex !== -1) {
      selectedCharacters.splice(charIndex, 1);
    } else if (selectedCharacters.length < this.MAX_CHARACTERS) {
      selectedCharacters = [...selectedCharacters, character];
    }

    return selectedCharacters;
  }

  filterFavoredMeals(selectedCharacters: ICharacter[]): IMeal[] {
    const firstCharacter = selectedCharacters[0];

    if (selectedCharacters.length === 1) {
      return firstCharacter.favoriteMeals;
    }

    const secondCharacter = selectedCharacters[1];
    return this.mealChartLogicService.findMatchingMeals(firstCharacter, secondCharacter);
  }
}

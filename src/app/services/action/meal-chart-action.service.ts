// Angular
import { Injectable } from '@angular/core';

// Interfaces
import { ICharacter, IMeal } from '../../interfaces/meal-chart.interface';

// Rxjs
import { Observable } from 'rxjs';

// Services
import { MealChartAdapterService } from '../adapter/meal-chart-adapter.service';
import { MealChartRosterInitializerService } from '../roster-initializer/meal-chart-roster-initializer.service';
import { MealChartStateService } from '../state/meal-chart-state.service';

@Injectable()
export class MealChartActionService {
  constructor(
    private readonly mealChartAdapterService: MealChartAdapterService,
    private readonly mealChartRosterInitializerService: MealChartRosterInitializerService,
    private readonly mealChartStateService: MealChartStateService,
  ) {}

  initializeHouseRosters() {
    this.mealChartRosterInitializerService.initializeHouseRosters();
  }

  getMeals(): Observable<IMeal[]> {
    return this.mealChartStateService.getMeals();
  }

  getFavoredMeals(): Observable<IMeal[]> {
    return this.mealChartStateService.getFavoredMeals();
  }

  getBlackEaglesRoster(): Observable<ICharacter[]> {
    return this.mealChartStateService.getBlackEaglesRoster();
  }

  getBlueLionsRoster(): Observable<ICharacter[]> {
    return this.mealChartStateService.getBlueLionsRoster();
  }

  getGoldenDeerRoster(): Observable<ICharacter[]> {
    return this.mealChartStateService.getGoldenDeerRoster();
  }

  getChurchOfSeirosRoster(): Observable<ICharacter[]> {
    return this.mealChartStateService.getChurchOfSeirosRoster();
  }

  getAshenWolvesRoster(): Observable<ICharacter[]> {
    return this.mealChartStateService.getAshenWolvesRoster();
  }

  getSelectedCharacters(): Observable<ICharacter[]> {
    return this.mealChartStateService.getSelectedCharacters();
  }

  selectCharacter(selectedCharacters: ICharacter[], character: ICharacter) {
    const newSelectedCharacters = this.mealChartAdapterService.selectCharacter(selectedCharacters, character);
    this.mealChartStateService.setSelectedCharacters(newSelectedCharacters);

    this.updateFavoredMeals(newSelectedCharacters);
  }

  private updateFavoredMeals(selectedCharacters: ICharacter[]) {
    const favoredMeals = this.mealChartAdapterService.filterFavoredMeals(selectedCharacters);
    this.mealChartStateService.setFavoredMeals(favoredMeals);
  }
}

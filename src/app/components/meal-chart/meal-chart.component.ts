// Angular
import { Component, OnInit } from '@angular/core';

// Interfaces
import { ICharacter } from '../../interfaces/meal-chart.interface';

// Services
import { MealChartActionService } from '../../services/action/meal-chart-action.service';

@Component({
  selector: 'meal-chart',
  templateUrl: './meal-chart.component.html',
  styleUrls: ['./meal-chart.component.scss'],
})
export class MealChartComponent implements OnInit {
  readonly blackEaglesRoster = this.mealChartActionService.getBlackEaglesRoster();
  readonly blueLionsRoster = this.mealChartActionService.getBlueLionsRoster();
  readonly goldenDeerRoster = this.mealChartActionService.getGoldenDeerRoster();
  readonly churchOfSeirosRoster = this.mealChartActionService.getChurchOfSeirosRoster();
  readonly ashenWolvesRoster = this.mealChartActionService.getAshenWolvesRoster();
  readonly selectedCharacters = this.mealChartActionService.getSelectedCharacters();
  readonly favoredMeals = this.mealChartActionService.getFavoredMeals();

  constructor(
    private readonly mealChartActionService: MealChartActionService,
  ) {}

  ngOnInit() {
    this.mealChartActionService.initializeHouseRosters();
  }

  selectCharacter(selectedCharacters: ICharacter[] | null, character: ICharacter) {
    if (!selectedCharacters) {
      return;
    }
    this.mealChartActionService.selectCharacter(selectedCharacters, character);
  }
}

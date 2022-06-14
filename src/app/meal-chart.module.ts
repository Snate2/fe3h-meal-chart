// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { MealChartComponent } from './components/meal-chart/meal-chart.component';

// Pipes
import { SelectedCharacterPipe } from './pipes/selected-character/selected-character.pipe';

// Services
import { MealChartActionService } from './services/action/meal-chart-action.service';
import { MealChartAdapterService } from './services/adapter/meal-chart-adapter.service';
import { MealChartRosterInitializerService } from './services/roster-initializer/meal-chart-roster-initializer.service';
import { MealChartStateService } from './services/state/meal-chart-state.service';

@NgModule({
  declarations: [
    MealChartComponent,
    SelectedCharacterPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MealChartActionService,
    MealChartAdapterService,
    MealChartRosterInitializerService,
    MealChartStateService,
  ],
  bootstrap: [
    MealChartComponent
  ],
})
export class MealChartModule { }

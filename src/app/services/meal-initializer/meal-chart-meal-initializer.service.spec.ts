import { TestBed } from '@angular/core/testing';

import { MealChartMealInitializerService } from './meal-chart-meal-initializer.service';

describe('MealChartMealInitializerService', () => {
  let service: MealChartMealInitializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealChartMealInitializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MealChartLogicService } from './meal-chart-logic.service';

describe('MealChartLogicService', () => {
  let service: MealChartLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealChartLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

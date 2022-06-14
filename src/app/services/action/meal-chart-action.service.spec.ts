import { TestBed } from '@angular/core/testing';

import { MealChartActionService } from './meal-chart-action.service';

describe('MealChartActionService', () => {
  let service: MealChartActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealChartActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

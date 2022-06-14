import { TestBed } from '@angular/core/testing';

import { MealChartStateService } from './meal-chart-state.service';

describe('MealChartStateService', () => {
  let service: MealChartStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealChartStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

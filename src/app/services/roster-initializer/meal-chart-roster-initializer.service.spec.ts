import { TestBed } from '@angular/core/testing';

import { MealChartInitializerService } from './meal-chart-initializer.service';

describe('MealChartInitializerService', () => {
  let service: MealChartInitializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealChartInitializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

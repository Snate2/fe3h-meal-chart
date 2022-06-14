import { TestBed } from '@angular/core/testing';

import { MealChartAdapterService } from './meal-chart-adapter.service';

describe('MealChartAdapterService', () => {
  let service: MealChartAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealChartAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

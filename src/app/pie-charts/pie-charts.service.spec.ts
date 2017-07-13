import { TestBed, inject } from '@angular/core/testing';

import { PieChartsService } from './pie-charts.service';

describe('PieChartsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PieChartsService]
    });
  });

  it('should be created', inject([PieChartsService], (service: PieChartsService) => {
    expect(service).toBeTruthy();
  }));
});

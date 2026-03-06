import { TestBed } from '@angular/core/testing';

import { NutritionService } from './nutrition.service';

describe('NutritionService', () => {
  let service: NutritionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutritionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return nutrition plans', (done) => {
    service.getAllNutrition().subscribe(plans => {
      expect(plans).toBeDefined();
      expect(plans.length).toBeGreaterThan(0);
      expect(plans[0]).toHaveProperty('id');
      expect(plans[0]).toHaveProperty('nombrePlan');
      expect(plans[0]).toHaveProperty('tipo');
      done();
    });
  });
});

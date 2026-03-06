import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNutritionComponent } from './list-nutrition.component';

describe('ListNutritionComponent', () => {
  let component: ListNutritionComponent;
  let fixture: ComponentFixture<ListNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListNutritionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

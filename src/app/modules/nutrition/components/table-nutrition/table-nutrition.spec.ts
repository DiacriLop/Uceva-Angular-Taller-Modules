import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNutrition } from './table-nutrition';

describe('TableNutrition', () => {
  let component: TableNutrition;
  let fixture: ComponentFixture<TableNutrition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableNutrition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableNutrition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

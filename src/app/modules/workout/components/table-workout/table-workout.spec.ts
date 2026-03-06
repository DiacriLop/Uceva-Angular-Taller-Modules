import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWorkout } from './table-workout';

describe('TableWorkout', () => {
  let component: TableWorkout;
  let fixture: ComponentFixture<TableWorkout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableWorkout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWorkout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

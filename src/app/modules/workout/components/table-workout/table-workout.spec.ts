import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWorkoutComponent } from './table-workout';

describe('TableWorkoutComponent', () => {
  let component: TableWorkoutComponent;
  let fixture: ComponentFixture<TableWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableWorkoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

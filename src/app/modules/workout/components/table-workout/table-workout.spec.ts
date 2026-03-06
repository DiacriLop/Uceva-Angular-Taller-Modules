import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WORKOUTS } from '../../../../core/config/workout.config';
import { SharedModule } from '../../../shared/shared-module';
import { TableWorkoutComponent } from './table-workout';

describe('TableWorkoutComponent', () => {
  let component: TableWorkoutComponent;
  let fixture: ComponentFixture<TableWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableWorkoutComponent],
      imports: [SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWorkoutComponent);
    component = fixture.componentInstance;
    component.workouts = WORKOUTS;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada workout', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.workouts.length);
  });

  it('debería mostrar los datos del workout en cada columna', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const workout = component.workouts[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(workout.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(workout.name);
      expect(columns[3].nativeElement.textContent.trim()).toBe(String(workout.duration));
    });
  });
});




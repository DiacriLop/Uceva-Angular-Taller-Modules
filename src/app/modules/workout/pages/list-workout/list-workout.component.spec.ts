import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { SharedModule } from '../../../shared/shared-module';
import { WorkoutService } from '../../services/workout.service';
import { ListWorkoutComponent } from './list-workout.component';
import { TableWorkoutComponent } from '../../components/table-workout/table-workout';

describe('ListWorkoutComponent', () => {
  let component: ListWorkoutComponent;
  let fixture: ComponentFixture<ListWorkoutComponent>;
  let workoutService: WorkoutService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListWorkoutComponent, TableWorkoutComponent],
      imports: [SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWorkoutComponent);
    component = fixture.componentInstance;
    workoutService = TestBed.inject(WorkoutService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar los workouts al inicializar', () => {
    const spyGetAllWorkout = jest.spyOn(workoutService, 'getAllWorkout').mockReturnValue(of([
      {
        id: 1,
        name: 'Entrenamiento de Fuerza',
        type: 'Strength',
        duration: 45,
        difficulty: 'Medium'
      }
    ]));
    fixture.detectChanges();
    expect(spyGetAllWorkout).toHaveBeenCalled();
    expect(component.workouts.length).toBe(1);
    expect(component.workouts[0].name).toBe('Entrenamiento de Fuerza');
  });

  it('debería renderizar el componente de tabla', () => {
    jest.spyOn(workoutService, 'getAllWorkout').mockReturnValue(of([
      {
        id: 1,
        name: 'Entrenamiento de Fuerza',
        type: 'Strength',
        duration: 45,
        difficulty: 'Medium'
      }
    ]));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement.query(By.css('app-table-workout'));
    expect(tableComponent).toBeTruthy();
  });
});

import { Component, inject, OnInit } from '@angular/core';
import { Workout } from '../../interfaces/workout.interface';
import { WorkoutService } from '../../services/workout.service';

/**
 * Componente contenedor de entrenamientos.
 *
 * Se utiliza para gestionar y mostrar un listado de workouts
 * utilizando el componente `TableWorkoutComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `WorkoutService`
 * para obtener los workouts y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-workout></app-list-workout>
 * ```
 */
@Component({
  selector: 'app-list-workout',
  template: `<app-table-workout [workouts]="workouts"></app-table-workout>`,
  standalone: false,
})
export class ListWorkoutComponent implements OnInit {
  /**
   * Listado de workouts obtenidos desde el servicio.
   * @type {Workout[]}
   */
  workouts: Workout[] = [];

  /**
   * Servicio para obtener workouts.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private workoutService = inject(WorkoutService);

  /**
   * Inicializa el componente y carga los workouts.
   * @remarks
   * Se suscribe al método `getAllWorkout()` del servicio y
   * asigna los datos recibidos a la propiedad `workouts`.
   */
  ngOnInit(): void {
    this.workoutService.getAllWorkout().subscribe({
      next: (workouts: Workout[]) => this.workouts = workouts,
      error: (error: any) => console.error(error),
    });
  }
}

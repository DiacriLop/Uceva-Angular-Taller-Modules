import { Injectable } from '@angular/core';
import { Workout } from '../interfaces/workout.interface';
import { WORKOUTS } from '../../../core/config/workout.config';
import { Observable, of } from 'rxjs';

/**
 * Servicio para gestionar entrenamientos (workouts).
 *
 * Se encarga de proporcionar métodos para obtener los workouts de la aplicación.
 * Actualmente devuelve un listado de workouts de ejemplo definidos en `WORKOUTS`.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a los workouts.
 *
 * @example
 * ```ts
 * // Inyectando el servicio en un componente
 * constructor(private workoutService: WorkoutService) {}
 *
 * ngOnInit() {
 *   this.workoutService.getAllWorkout().subscribe(workouts => {
 *     console.log(workouts);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  /**
   * Obtiene todos los entrenamientos disponibles.
   *
   * @returns Observable con el listado de workouts (`Workout[]`).
   */
  getAllWorkout(): Observable<Workout[]> {
    return of(WORKOUTS);
  }
}


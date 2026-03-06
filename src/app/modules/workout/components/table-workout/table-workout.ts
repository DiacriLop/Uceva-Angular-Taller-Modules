import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { Workout, WorkoutType, WorkoutDifficulty } from '../../interfaces/workout.interface';

/**
 * Componente de tabla de entrenamientos.
 *
 * Se utiliza para mostrar un listado de workouts en una tabla,
 * mostrando información como id, nombre, tipo, duración y dificultad
 * con badges visuales que indican el tipo y nivel de dificultad.
 *
 * @remarks
 * Este componente recibe los workouts desde un componente padre
 * a través del Input `workouts` y utiliza los mapeos `typeMap` y `difficultyMap`
 * para asignar colores a los badges según la categoría.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-table-workout [workouts]="workoutsList"></app-table-workout>
 * ```
 */
@Component({
  selector: 'app-table-workout',
  standalone: false,
  templateUrl: './table-workout.html',
  styleUrl: './table-workout.scss',
})
export class TableWorkoutComponent {
  /**
   * Listado de workouts que se mostrarán en la tabla.
   * @type {Workout[]}
   * @remarks
   * Este Input permite pasar un array de workouts desde un componente padre,
   * generalmente `ListWorkoutComponent`. Cada workout debe cumplir la interfaz `Workout`.
   */
  @Input() workouts: Workout[] = [];

  /**
   * Mapeo de tipos de ejercicio a tipos de Badge.
   * @type {Record<WorkoutType, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada tipo de ejercicio:
   * - 'Strength' → 'success' (verde)
   * - 'Cardio' → 'primary' (azul)
   * - 'HIIT' → 'danger' (rojo)
   * - 'Core' → 'warning' (amarillo)
   *
   * Esto permite que en la tabla cada workout tenga un badge visual que indique su tipo
   * de forma clara para el usuario.
   */
  typeMap: Record<WorkoutType, BadgeType> = {
    'Strength': 'success',
    'Cardio': 'primary',
    'HIIT': 'danger',
    'Core': 'warning'
  };

  /**
   * Mapeo de dificultades de workout a tipos de Badge.
   * @type {Record<WorkoutDifficulty, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada nivel de dificultad:
   * - 'Easy' → 'secondary' (gris)
   * - 'Medium' → 'info' (cyan)
   * - 'Hard' → 'dark' (negro)
   *
   * Esto permite que en la tabla cada workout tenga un badge visual que indique su dificultad
   * de forma clara para el usuario.
   */
  difficultyMap: Record<WorkoutDifficulty, BadgeType> = {
    'Easy': 'secondary',
    'Medium': 'info',
    'Hard': 'dark'
  };
}

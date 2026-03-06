/**
 * Interfaz que representa un ejercicio o rutina de entrenamiento.
 *
 * Contiene la información básica necesaria para mostrar un ejercicio
 * en tablas, listas o cualquier componente de visualización.
 *
 * @remarks
 * Cada ejercicio debe tener:
 * - Un `id` único para identificarlo.
 * - Un `name` que describe el ejercicio.
 * - Un `type` que indica el tipo de entrenamiento.
 * - Una `duration` que representa el tiempo del ejercicio en minutos.
 * - Un `difficulty` que define el nivel de dificultad.
 *
 * @example
 * ```ts
 * const workout: Workout = {
 *   id: 1,
 *   name: 'Push Ups',
 *   type: 'Strength',
 *   duration: 10,
 *   difficulty: 'Medium'
 * };
 * ```
 */
export interface Workout {

    /** Identificador único del ejercicio */
    id: number;

    /** Nombre o descripción del ejercicio */
    name: string;

    /** Tipo de ejercicio */
    type: WorkoutType;

    /** Duración del ejercicio en minutos */
    duration: number;

    /** Nivel de dificultad del ejercicio */
    difficulty: WorkoutDifficulty;
}

/**
 * Tipo de categoría de ejercicio.
 *
 * @remarks
 * Restringe los tipos de ejercicio a valores predefinidos:
 * - 'Strength'
 * - 'Cardio'
 * - 'HIIT'
 * - 'Core'
 *
 * @example
 * ```ts
 * const tipo: WorkoutType = 'Cardio';
 * ```
 */
export type WorkoutType = 'Strength' | 'Cardio' | 'HIIT' | 'Core';

/**
 * Tipo de dificultad del ejercicio.
 *
 * @remarks
 * Define el nivel de dificultad que puede tener un ejercicio:
 * - 'Easy'
 * - 'Medium'
 * - 'Hard'
 *
 * @example
 * ```ts
 * const dificultad: WorkoutDifficulty = 'Medium';
 * ```
 */
export type WorkoutDifficulty = 'Easy' | 'Medium' | 'Hard';
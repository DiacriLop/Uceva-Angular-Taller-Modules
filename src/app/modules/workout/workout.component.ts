import { Component } from '@angular/core';

/**
 * Componente contenedor del módulo de entrenamientos.
 *
 * @remarks
 * Este componente actúa como contenedor principal del módulo de workout,
 * delegando la renderización de contenido específico a sus rutas hijas
 * a través del router-outlet.
 *
 * Forma parte de la arquitectura modular de la aplicación y se considera
 * el punto de entrada para todas las funcionalidades relacionadas con
 * entrenamientos y ejercicios.
 *
 * @example
 * ```html
 * <app-workout></app-workout>
 * ```
 */
@Component({
  selector: 'app-workout',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class WorkoutComponent {

}
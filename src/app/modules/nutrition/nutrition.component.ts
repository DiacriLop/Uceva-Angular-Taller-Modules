import { Component } from '@angular/core';

/**
 * Componente contenedor del módulo de nutrición.
 *
 * @remarks
 * Este componente actúa como contenedor principal del módulo de nutrition,
 * delegando la renderización de contenido específico a sus rutas hijas
 * a través del router-outlet.
 *
 * Forma parte de la arquitectura modular de la aplicación y se considera
 * el punto de entrada para todas las funcionalidades relacionadas con
 * planes de nutrición y alimentación.
 *
 * @example
 * ```html
 * <app-nutrition></app-nutrition>
 * ```
 */
@Component({
  selector: 'app-nutrition',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class NutritionComponent {
}

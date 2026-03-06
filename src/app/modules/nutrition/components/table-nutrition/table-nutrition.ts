import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { Nutrition, NutritionPlanType } from '../../interface/nutrition.interface';

/**
 * Componente de tabla para mostrar planes de nutrición.
 *
 * @remarks
 * Este componente muestra un listado de planes de nutrición en formato tabular,
 * incluyendo información como nombre del plan, tipo (con badges visuales),
 * calorías diarias, duración y público recomendado.
 *
 * Utiliza el componente {@link BadgeComponent} para mostrar los tipos de dieta
 * con colores diferenciados según el tipo de plan nutricional.
 *
 * Forma parte de la capa de presentación y se considera un **organismo**
 * dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-table-nutrition [nutrition]="nutritionPlans"></app-table-nutrition>
 * ```
 */
@Component({
  selector: 'app-table-nutrition',
  standalone: false,
  templateUrl: './table-nutrition.html',
  styleUrl: './table-nutrition.scss',
})
export class TableNutrition {
  /**
   * Listado de planes de nutrición que se mostrarán en la tabla.
   */
  @Input() nutrition: Nutrition[] = [];

  /**
   * Mapeo de tipos de planes a tipos de Badge.
   */
  typeMap: Record<NutritionPlanType, BadgeType> = {
    'vegano': 'success',
    'keto': 'danger',
    'balanceado': 'primary',
  };
}

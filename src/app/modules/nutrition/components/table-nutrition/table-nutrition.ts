import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { Nutrition, NutritionPlanType } from '../../interface/nutrition.interface';

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

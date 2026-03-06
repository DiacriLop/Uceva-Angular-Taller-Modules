import { Component, inject, OnInit } from '@angular/core';
import { Nutrition } from '../../interface/nutrition.interface';
import { NutritionService } from '../../services/nutrition.service';

/**
 * Componente contenedor de planes de nutrición.
 *
 * Se utiliza para gestionar y mostrar un listado de planes de nutrición
 * utilizando el componente `TableNutrition`.
 */
@Component({
  selector: 'app-list-nutrition',
  template: `<app-table-nutrition [nutrition]="nutritionPlans"></app-table-nutrition>`,
  standalone: false,
})
export class ListNutritionComponent implements OnInit {
  /**
   * Listado de planes de nutrición obtenidos desde el servicio.
   */
  nutritionPlans: Nutrition[] = [];

  /**
   * Servicio para obtener planes de nutrición.
   */
  private nutritionService = inject(NutritionService);

  /**
   * Inicializa el componente y carga los planes de nutrición.
   */
  ngOnInit(): void {
    this.nutritionService.getAllNutrition().subscribe({
      next: (plans: Nutrition[]) => this.nutritionPlans = plans,
      error: (error: any) => console.error(error),
    });
  }
}

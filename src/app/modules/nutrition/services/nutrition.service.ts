import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Nutrition } from '../interface/nutrition.interface';

@Injectable({
  providedIn: 'root',
})
export class NutritionService {
  /**
   * Obtiene todos los planes de nutrición.
   * @returns {Observable<Nutrition[]>} Observable con la lista de planes.
   */
  getAllNutrition(): Observable<Nutrition[]> {
    // TODO: Implementar llamada a API
    return of([
      {
        id: 1,
        nombrePlan: 'Plan Vegano Básico',
        caloriasDiarias: 1800,
        tipo: 'vegano',
        duracionSemanas: 4,
        recomendadoPara: 'Principiantes en dieta vegana'
      },
      {
        id: 2,
        nombrePlan: 'Plan Keto Avanzado',
        caloriasDiarias: 2000,
        tipo: 'keto',
        duracionSemanas: 8,
        recomendadoPara: 'Usuarios experimentados'
      },
      {
        id: 3,
        nombrePlan: 'Plan Balanceado',
        caloriasDiarias: 2200,
        tipo: 'balanceado',
        duracionSemanas: 6,
        recomendadoPara: 'Todos los niveles'
      }
    ]);
  }
}

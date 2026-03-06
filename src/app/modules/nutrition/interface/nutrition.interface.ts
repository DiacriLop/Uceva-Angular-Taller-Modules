/**
 * Interfaz que representa un plan de nutrición.
 *
 * Contiene la información básica necesaria para mostrar un plan
 * en la tabla, lista o cualquier componente de la aplicación.
 *
 * @remarks
 * Cada plan debe tener un `id` único, un `nombrePlan` descriptivo,
 * un `tipo` válido, `caloriasDiarias`, duración en semanas y
 * recomendaciones específicas.
 *
 * @example
 * ```ts
 * const plan: NutritionPlan = {
 *   id: 1,
 *   nombrePlan: 'Plan Vegano Básico',
 *   caloriasDiarias: 1800,
 *   tipo: 'vegano',
 *   duracionSemanas: 4,
 *   recomendadoPara: 'Principiantes en dieta vegana'
 * };
 * ```
 */
export interface Nutrition {
    /** Identificador único del plan */
    id: number;

    /** Nombre descriptivo del plan */
    nombrePlan: string;

    /** Calorías diarias recomendadas para el plan */
    caloriasDiarias: number;

    /** Tipo de dieta del plan */
    tipo: NutritionPlanType;

    /** Duración del plan en semanas */
    duracionSemanas: number;

    /** Público recomendado para este plan */
    recomendadoPara: string;
}

/**
 * Tipo de plan de nutrición.
 *
 * @remarks
 * Este tipo restringe los valores a las opciones predefinidas:
 * - 'vegano'
 * - 'keto'
 * - 'balanceado'
 *
 * Se utiliza para filtrar planes o mostrar badges de colores en la UI.
 *
 * @example
 * ```ts
 * const tipo: NutritionPlanType = 'keto';
 * ```
 */
export type NutritionPlanType = 'vegano' | 'keto' | 'balanceado';
import { Workout } from "../../modules/workout/interfaces/workout.interface";

/**
 * Listado de ejercicios disponibles en el sistema.
 *
 * Esta constante simula una fuente de datos (mock) utilizada para:
 * - Desarrollo sin backend
 * - Pruebas del módulo de workouts
 * - Visualización en tablas
 *
 * @type {Workout[]}
 */
export const WORKOUTS: Workout[] = [
{
    id: 1,
    name: "Push Ups",
    type: "Strength",
    duration: 10,
    difficulty: "Medium"
},
{
    id: 2,
    name: "Jump Rope",
    type: "Cardio",
    duration: 15,
    difficulty: "Easy"
},
{
    id: 3,
    name: "Squats",
    type: "Strength",
    duration: 12,
    difficulty: "Medium"
},
{
    id: 4,
    name: "Burpees",
    type: "HIIT",
    duration: 8,
    difficulty: "Hard"
},
{
    id: 5,
    name: "Plank",
    type: "Core",
    duration: 5,
    difficulty: "Medium"
}
];
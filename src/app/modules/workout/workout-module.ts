import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutRoutingModule } from './workout-routing-module';
import { WorkoutComponent } from './workout.component';
import { SharedModule } from '../shared/shared-module';
import { TableWorkout } from './components/table-workout/table-workout';
import { ListWorkoutComponent } from './pages/list-workout/list-workout.component';


@NgModule({
  declarations: [
    WorkoutComponent,
    TableWorkout,
    ListWorkoutComponent
  ],
  imports: [
    CommonModule,
    WorkoutRoutingModule,
    SharedModule,
  ]
})
export class WorkoutModule { }

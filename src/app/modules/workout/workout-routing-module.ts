import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListWorkoutComponent } from './pages/list-workout/list-workout.component';

const routes: Routes = [
  {
      path: 'list-workout',
      component: ListWorkoutComponent
    },
    {
      path: '**',
      redirectTo: 'list-workout'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutRoutingModule { }

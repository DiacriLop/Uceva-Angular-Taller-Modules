import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNutritionComponent } from './pages/list-nutrition/list-nutrition.component';

const routes: Routes = [
  {
      path: 'list-nutrition',
      component: ListNutritionComponent
    },
    {
      path: '**',
      redirectTo: 'list-nutrition'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutritionRoutingModule { }

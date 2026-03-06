import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutritionRoutingModule } from './nutrition-routing-module';
import { NutritionComponent } from './nutrition.component';
import { TableNutrition } from './components/table-nutrition/table-nutrition';
import { ListNutritionComponent } from './pages/list-nutrition/list-nutrition.component';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    NutritionComponent,
    TableNutrition,
    ListNutritionComponent
  ],
  imports: [
    CommonModule,
    NutritionRoutingModule,
    SharedModule,
  ]
})
export class NutritionModule { }

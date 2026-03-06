import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { SharedModule } from '../../../shared/shared-module';
import { NutritionService } from '../../services/nutrition.service';
import { ListNutritionComponent } from './list-nutrition.component';
import { TableNutrition } from '../../components/table-nutrition/table-nutrition';

describe('ListNutritionComponent', () => {
  let component: ListNutritionComponent;
  let fixture: ComponentFixture<ListNutritionComponent>;
  let nutritionService: NutritionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListNutritionComponent, TableNutrition],
      imports: [SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNutritionComponent);
    component = fixture.componentInstance;
    nutritionService = TestBed.inject(NutritionService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar los planes de nutrición al inicializar', () => {
    const spyGetAllNutrition = jest.spyOn(nutritionService, 'getAllNutrition').mockReturnValue(of([
      {
        id: 1,
        nombrePlan: 'Plan Vegano Básico',
        caloriasDiarias: 1800,
        tipo: 'vegano',
        duracionSemanas: 4,
        recomendadoPara: 'Principiantes en dieta vegana'
      }
    ]));
    fixture.detectChanges();
    expect(spyGetAllNutrition).toHaveBeenCalled();
    expect(component.nutritionPlans.length).toBe(1);
    expect(component.nutritionPlans[0].nombrePlan).toBe('Plan Vegano Básico');
  });

  it('debería renderizar el componente de tabla', () => {
    jest.spyOn(nutritionService, 'getAllNutrition').mockReturnValue(of([
      {
        id: 1,
        nombrePlan: 'Plan Vegano Básico',
        caloriasDiarias: 1800,
        tipo: 'vegano',
        duracionSemanas: 4,
        recomendadoPara: 'Principiantes en dieta vegana'
      }
    ]));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement.query(By.css('app-table-nutrition'));
    expect(tableComponent).toBeTruthy();
  });
});

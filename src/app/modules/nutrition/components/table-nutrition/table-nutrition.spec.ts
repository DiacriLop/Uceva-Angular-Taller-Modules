import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../../shared/shared-module';
import { TableNutrition } from './table-nutrition';

describe('TableNutrition', () => {
  let component: TableNutrition;
  let fixture: ComponentFixture<TableNutrition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableNutrition],
      imports: [SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableNutrition);
    component = fixture.componentInstance;
    component.nutrition = [
      {
        id: 1,
        nombrePlan: 'Plan Vegano Básico',
        caloriasDiarias: 1800,
        tipo: 'vegano',
        duracionSemanas: 4,
        recomendadoPara: 'Principiantes en dieta vegana'
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar filas de datos', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.nutrition.length);
  });

  it('debería mostrar los datos del plan de nutrición', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    const firstRow = rows[0];
    const columns = firstRow.queryAll(By.css('th, td'));

    expect(columns[0].nativeElement.textContent.trim()).toBe('1');
    expect(columns[1].nativeElement.textContent.trim()).toBe('Plan Vegano Básico');
    expect(columns[3].nativeElement.textContent.trim()).toBe('1800');
    expect(columns[4].nativeElement.textContent.trim()).toBe('4');
  });
});

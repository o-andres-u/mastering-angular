import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMedioPagoComponent } from './tabla-medio-pago.component';

describe('TablaMedioPagoComponent', () => {
  let component: TablaMedioPagoComponent;
  let fixture: ComponentFixture<TablaMedioPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaMedioPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMedioPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

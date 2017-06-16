import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDetallePedidoComponent } from './tabla-detalle-pedido.component';

describe('TablaDetallePedidoComponent', () => {
  let component: TablaDetallePedidoComponent;
  let fixture: ComponentFixture<TablaDetallePedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaDetallePedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDetallePedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

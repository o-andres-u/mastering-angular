import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPagoPedidoComponent } from './total-pago-pedido.component';

describe('TotalPagoPedidoComponent', () => {
  let component: TotalPagoPedidoComponent;
  let fixture: ComponentFixture<TotalPagoPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPagoPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPagoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

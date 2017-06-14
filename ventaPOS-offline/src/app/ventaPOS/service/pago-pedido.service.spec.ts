import { TestBed, inject } from '@angular/core/testing';

import { PagoPedidoService } from './pago-pedido.service';

describe('PagoPedidoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagoPedidoService]
    });
  });

  it('should be created', inject([PagoPedidoService], (service: PagoPedidoService) => {
    expect(service).toBeTruthy();
  }));
});

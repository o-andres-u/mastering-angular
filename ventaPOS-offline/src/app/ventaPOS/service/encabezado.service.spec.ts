import { TestBed, inject } from '@angular/core/testing';

import { EncabezadoService } from './encabezado.service';

describe('EncabezadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EncabezadoService]
    });
  });

  it('should be created', inject([EncabezadoService], (service: EncabezadoService) => {
    expect(service).toBeTruthy();
  }));
});

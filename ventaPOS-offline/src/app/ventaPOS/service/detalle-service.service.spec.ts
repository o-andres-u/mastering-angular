import { TestBed, inject } from '@angular/core/testing';

import { DetalleServiceService } from './detalle-service.service';

describe('DetalleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleServiceService]
    });
  });

  it('should be created', inject([DetalleServiceService], (service: DetalleServiceService) => {
    expect(service).toBeTruthy();
  }));
});

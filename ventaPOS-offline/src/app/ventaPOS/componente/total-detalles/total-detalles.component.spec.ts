import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDetallesComponent } from './total-detalles.component';

describe('TotalDetallesComponent', () => {
  let component: TotalDetallesComponent;
  let fixture: ComponentFixture<TotalDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

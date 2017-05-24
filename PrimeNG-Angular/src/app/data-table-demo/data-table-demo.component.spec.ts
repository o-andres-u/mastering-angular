import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableDemoComponent } from './data-table-demo.component';

describe('DataTableDemoComponent', () => {
  let component: DataTableDemoComponent;
  let fixture: ComponentFixture<DataTableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

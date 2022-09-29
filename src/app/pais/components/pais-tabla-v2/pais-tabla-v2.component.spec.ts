import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisTablaV2Component } from './pais-tabla-v2.component';

describe('PaisTablaV2Component', () => {
  let component: PaisTablaV2Component;
  let fixture: ComponentFixture<PaisTablaV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisTablaV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisTablaV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

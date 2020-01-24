import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDetalheComponent } from './consulta-detalhe.component';

describe('ConsultaDetalheComponent', () => {
  let component: ConsultaDetalheComponent;
  let fixture: ComponentFixture<ConsultaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

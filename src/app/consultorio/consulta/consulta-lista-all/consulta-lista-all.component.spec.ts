import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaListaAllComponent } from './consulta-lista-all.component';

describe('ConsultaListaAllComponent', () => {
  let component: ConsultaListaAllComponent;
  let fixture: ComponentFixture<ConsultaListaAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaListaAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaListaAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

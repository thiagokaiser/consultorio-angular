import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ConsultorioRoutingModule } from './consultorio-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConsultaDetalheComponent } from './consulta/consulta-detalhe/consulta-detalhe.component';
import { ConsultaFormComponent } from './consulta/consulta-form/consulta-form.component';
import { ConsultaListaComponent } from './consulta/consulta-lista/consulta-lista.component';
import { ConsultaListaAllComponent } from './consulta/consulta-lista-all/consulta-lista-all.component';
import { PacienteDetalheComponent } from './paciente/paciente-detalhe/paciente-detalhe.component';
import { PacienteFormComponent } from './paciente/paciente-form/paciente-form.component';
import { PacienteListaComponent } from './paciente/paciente-lista/paciente-lista.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    HomeComponent,ConsultaDetalheComponent, ConsultaFormComponent,ConsultaListaComponent,ConsultaListaAllComponent,
    PacienteDetalheComponent,PacienteFormComponent, PacienteListaComponent
  ],
  imports: [
    CommonModule,
    ConsultorioRoutingModule,    
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    MatSortModule
  ],
  exports:[
    HomeComponent
  ],
  providers: []
})
export class ConsultorioModule { }

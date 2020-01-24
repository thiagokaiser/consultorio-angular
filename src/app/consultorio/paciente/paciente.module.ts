import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteDetalheComponent } from './paciente-detalhe/paciente-detalhe.component';
import { PacienteListaComponent } from './paciente-lista/paciente-lista.component';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { PacienteRoutingModule } from './paciente-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsultaDetalheComponent } from '../consulta/consulta-detalhe/consulta-detalhe.component';
import { ConsultaModule } from '../consulta/consulta.module';



@NgModule({
  declarations: [
    PacienteDetalheComponent,
    PacienteListaComponent,
    PacienteFormComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    ReactiveFormsModule,
    ConsultaModule
  ],
  providers:[
    PacienteDetalheComponent,
    PacienteListaComponent
  ]
})
export class PacienteModule { }

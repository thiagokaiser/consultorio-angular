import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ConsultorioRoutingModule } from './consultorio-routing.module';
import { PacienteRoutingModule } from './paciente/paciente-routing.module';
import { PacienteModule } from './paciente/paciente.module';
import { ConsultaModule } from './consulta/consulta.module';
import { ConsultaRoutingModule } from './consulta/consulta-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent    
  ],
  imports: [
    CommonModule,
    ConsultorioRoutingModule,
    PacienteRoutingModule,
    PacienteModule,
    ConsultaModule,
    ConsultaRoutingModule,
    SharedModule
  ],
  exports:[
    HomeComponent
  ]
})
export class ConsultorioModule { }

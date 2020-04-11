import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PacienteListaComponent } from './paciente/paciente-lista/paciente-lista.component';
import { PacienteDetalheComponent } from './paciente/paciente-detalhe/paciente-detalhe.component';
import { ConsultaListaComponent } from './consulta/consulta-lista/consulta-lista.component';
import { ConsultaDetalheComponent } from './consulta/consulta-detalhe/consulta-detalhe.component';
import { ConsultaFormComponent } from './consulta/consulta-form/consulta-form.component';
import { PacienteResolverGuard } from './paciente/guards/paciente-resolver.guard';
import { ConsultaResolverGuard } from './consulta/guards/consulta-resolver.guard';
import { PacienteFormComponent } from './paciente/paciente-form/paciente-form.component';
import { ConsultaListaAllComponent } from './consulta/consulta-lista-all/consulta-lista-all.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },    
  { path: 'paciente', component: PacienteListaComponent},
  { path: 'paciente/detalhe/:id', component: PacienteDetalheComponent, resolve: {paciente: PacienteResolverGuard}, children:[
    {path: '', component: ConsultaListaComponent},
    {path: 'consulta/novo', component: ConsultaFormComponent, resolve: {consulta: ConsultaResolverGuard}},    
    {path: 'consulta/:id', component: ConsultaDetalheComponent, resolve: {consulta: ConsultaResolverGuard}},    
    {path: 'consulta/:id/editar', component: ConsultaFormComponent, resolve: {consulta: ConsultaResolverGuard}},        
  ]},
  { path: 'paciente/editar/:id', component: PacienteFormComponent, resolve: {paciente: PacienteResolverGuard}},
  { path: 'paciente/novo', component: PacienteFormComponent, resolve: {paciente: PacienteResolverGuard}},
  { path: 'consulta', component: ConsultaListaAllComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultorioRoutingModule { }

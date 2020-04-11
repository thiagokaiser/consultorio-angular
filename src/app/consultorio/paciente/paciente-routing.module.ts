import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacienteListaComponent } from './paciente-lista/paciente-lista.component';
import { PacienteDetalheComponent } from './paciente-detalhe/paciente-detalhe.component';
import { PacienteResolverGuard } from './guards/paciente-resolver.guard';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { ConsultaDetalheComponent } from '../consulta/consulta-detalhe/consulta-detalhe.component';
import { ConsultaResolverGuard } from '../consulta/guards/consulta-resolver.guard';
import { ConsultaListaComponent } from '../consulta/consulta-lista/consulta-lista.component';
import { ConsultaFormComponent } from '../consulta/consulta-form/consulta-form.component';


const routes: Routes = [
  { path: '', component: PacienteListaComponent},
  { path: 'detalhe/:id', component: PacienteDetalheComponent, resolve: {paciente: PacienteResolverGuard}, children:[
    {path: '', component: ConsultaListaComponent},
    {path: 'consulta/:id', component: ConsultaDetalheComponent, resolve: {consulta: ConsultaResolverGuard}},
    {path: 'detalhe/:id', component: ConsultaDetalheComponent, resolve: {consulta: ConsultaResolverGuard}},
    {path: 'editar/:id', component: ConsultaFormComponent, resolve: {consulta: ConsultaResolverGuard}},
    {path: 'novo', component: ConsultaFormComponent, resolve: {consulta: ConsultaResolverGuard}},
    {path: 'novo/:pacienteid', component: ConsultaFormComponent, resolve: {consulta: ConsultaResolverGuard}}
  ]},
  { path: 'editar/:id', component: PacienteFormComponent, resolve: {paciente: PacienteResolverGuard}},
  { path: 'novo', component: PacienteFormComponent, resolve: {paciente: PacienteResolverGuard}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }

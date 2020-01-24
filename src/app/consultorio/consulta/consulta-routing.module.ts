import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaListaComponent } from './consulta-lista/consulta-lista.component';
import { ConsultaDetalheComponent } from './consulta-detalhe/consulta-detalhe.component';
import { ConsultaFormComponent } from './consulta-form/consulta-form.component';
import { ConsultaResolverGuard } from './guards/consulta-resolver.guard';
import { ConsultaListaAllComponent } from './consulta-lista-all/consulta-lista-all.component';



const routes: Routes = [
  { path: '', component: ConsultaListaAllComponent},
  { path: 'detalhe/:id', component: ConsultaDetalheComponent, resolve: {consulta: ConsultaResolverGuard}},
  { path: 'editar/:id', component: ConsultaFormComponent, resolve: {consulta: ConsultaResolverGuard}},
  { path: 'novo', component: ConsultaFormComponent, resolve: {consulta: ConsultaResolverGuard}},
  { path: 'novo/:pacienteid', component: ConsultaFormComponent, resolve: {consulta: ConsultaResolverGuard}}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaRoutingModule { }

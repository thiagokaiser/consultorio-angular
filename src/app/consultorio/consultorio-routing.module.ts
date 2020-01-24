import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'paciente',
    loadChildren: './paciente/paciente.module#PacienteModule'    
  },
  {
    path: 'consulta',
    loadChildren: './consulta/consulta.module#ConsultaModule'    
  },
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultorioRoutingModule { }

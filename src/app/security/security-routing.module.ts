import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarComponent } from './registrar/registrar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'registrar', component: RegistrarComponent    
  },
  {
    path: 'login/:to', component: LoginComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarComponent } from './registrar/registrar.component';
import { LoginComponent } from './login/login.component';
import { PerfilDetalheComponent } from './perfil/perfil-detalhe/perfil-detalhe.component';
import { PerfilFormComponent } from './perfil/perfil-form/perfil-form.component';
import { loggedInGuard } from './loggedIn.guard';
import { PerfilResolverGuard } from './perfil/guards/perfil-resolver.guard';

const routes: Routes = [
  {
    path: 'registrar', component: RegistrarComponent    
  },
  {
    path: 'login/:to', component: LoginComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'perfil', component: PerfilDetalheComponent, canLoad: [loggedInGuard], canActivate: [loggedInGuard]
  },
  {
    path: 'perfil/editar', component: PerfilFormComponent, resolve: {user: PerfilResolverGuard}, canLoad: [loggedInGuard], canActivate: [loggedInGuard]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }

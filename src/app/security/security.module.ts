import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { SecurityRoutingModule } from './security-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PerfilFormComponent } from './perfil/perfil-form/perfil-form.component';
import { PerfilDetalheComponent } from './perfil/perfil-detalhe/perfil-detalhe.component';
import { PerfilService } from './perfil/perfil.service';



@NgModule({
  declarations: [LoginComponent, RegistrarComponent, PerfilFormComponent, PerfilDetalheComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [PerfilService]
})
export class SecurityModule { }

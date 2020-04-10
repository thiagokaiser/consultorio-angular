import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { SecurityRoutingModule } from './security-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { loggedInGuard } from './loggedIn.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LoginComponent, RegistrarComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: []
})
export class SecurityModule { }

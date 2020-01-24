import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminlteModule } from './adminlte/adminlte.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConsultorioModule } from './consultorio/consultorio.module';
import { HttpClientModule } from '@angular/common/http';
import { PacienteDetalheComponent } from './consultorio/paciente/paciente-detalhe/paciente-detalhe.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AdminlteModule,
    ConsultorioModule,
    ModalModule.forRoot(),
    SharedModule    
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

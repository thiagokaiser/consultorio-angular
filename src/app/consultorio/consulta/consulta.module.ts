import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaDetalheComponent } from './consulta-detalhe/consulta-detalhe.component';
import { ConsultaListaComponent } from './consulta-lista/consulta-lista.component';
import { ConsultaFormComponent } from './consulta-form/consulta-form.component';
import { ConsultaRoutingModule } from './consulta-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConsultaListaAllComponent } from './consulta-lista-all/consulta-lista-all.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    ConsultaDetalheComponent,
    ConsultaListaComponent,
    ConsultaFormComponent,
    ConsultaListaAllComponent    
  ],
  imports: [
    CommonModule,
    ConsultaRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers:[
    ConsultaDetalheComponent,
    ConsultaListaComponent
  ]
  
})
export class ConsultaModule { }

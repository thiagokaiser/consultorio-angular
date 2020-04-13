import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Consulta } from '../consulta';
import { ConsultaService } from '../consulta.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consulta-lista',
  templateUrl: './consulta-lista.component.html'
})
export class ConsultaListaComponent implements OnInit {

  consultas$ : Observable<Consulta[]>

  constructor(
    private consultaService : ConsultaService,
    private router : Router,
    private route : ActivatedRoute      
  ){                
      route.params.subscribe(val => {        
        this.onRefresh();
      });     
  }

  ngOnInit() {    
  }

  carregaConsultas(){
    this.consultas$ = this.consultaService.list();    
  }

  onRefresh(){    
    let id = this.route.snapshot.paramMap.get('id');    
    this.consultas$ = this.consultaService.listPaciente(id);
  }

  onDetalhe(id){    
    this.router.navigate(['consulta', id], { relativeTo: this.route });        
  }

  onNovaConsulta(){        
    this.router.navigate(['consulta/novo'], { relativeTo: this.route });        
  }    
}

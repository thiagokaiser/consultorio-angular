import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Consulta } from '../consulta';
import { ConsultaService } from '../consulta.service';
import { catchError, switchMap, take } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-consulta-lista',
  templateUrl: './consulta-lista.component.html'
})
export class ConsultaListaComponent implements OnInit {

  consultas$ : Observable<Consulta[]>

  constructor(
    private consultaService : ConsultaService,
    private router : Router,
    private route : ActivatedRoute,
    private alertService: AlertModalService  
  ){                
      route.params.subscribe(val => {        
        this.onRefresh();
      });     
  }

  ngOnInit() {    
  }

  carregaConsultas(){
    this.consultas$ = this.consultaService.list().pipe(
      catchError(error => {
        console.error(error);        
        return EMPTY;
      })
    );
  }

  onRefresh(){    
    let id = this.route.snapshot.paramMap.get('id');    
    this.consultas$ = this.consultaService.listPaciente(id);
  }

  onDetalhe(id){    
    this.router.navigate(['consulta', id], { relativeTo: this.route });        
  }

  onNovaConsulta(){    
    //let id = this.route.snapshot.paramMap.get('id');    
    //this.router.navigate(['/consultorio/paciente/consulta/novo/', id]);
    this.router.navigate(['consulta/novo'], { relativeTo: this.route });        
  }  
  
  onDelete(consulta :Consulta){
    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja deletar?');
    result$.asObservable().pipe(
      take(1),
      switchMap(result => result ? this.consultaService.remove(consulta.id) : EMPTY)
    ).subscribe(
      success => {
        this.onRefresh();
      },
      error => console.log('erro')
    );  
  }
}

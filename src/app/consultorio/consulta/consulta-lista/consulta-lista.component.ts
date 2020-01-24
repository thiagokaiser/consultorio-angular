import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Consulta } from '../consulta';
import { ConsultaService } from '../consulta.service';
import { ConsultaDetalheComponent } from '../consulta-detalhe/consulta-detalhe.component';
import { catchError, switchMap, take } from 'rxjs/operators';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { PacienteDetalheComponent } from '../../paciente/paciente-detalhe/paciente-detalhe.component';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-consulta-lista',
  templateUrl: './consulta-lista.component.html',
  styleUrls: ['./consulta-lista.component.css']
})
export class ConsultaListaComponent implements OnInit {

  consultas$ : Observable<Consulta[]>

  constructor(
    private consultaService : ConsultaService,
    private pacienteDetalhe : PacienteDetalheComponent,
    private router : Router,
    private route : ActivatedRoute,
    private alertService: AlertModalService  
  ){                
      route.params.subscribe(val => {
        console.log(val);
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
    this.pacienteDetalhe.onDetalhe(id);
  }
  onNovaConsulta(){    
    let id = this.route.snapshot.paramMap.get('id');    
    this.router.navigate(['/consulta/novo/', id]);
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

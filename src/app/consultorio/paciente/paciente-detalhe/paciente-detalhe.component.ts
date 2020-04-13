import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { Consulta } from '../../consulta/consulta';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { PacienteService } from '../paciente.service';
import { take, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-paciente-detalhe',
  templateUrl: './paciente-detalhe.component.html'
})
export class PacienteDetalheComponent implements OnInit {

  paciente: Paciente; 
  consultas$ : Observable<Consulta[]>

  constructor(    
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertModalService,
    private service: PacienteService) {                
      route.params.subscribe(val => {        
        this.onRefresh();
      });
    }

  ngOnInit() {    
  }

  onEdit(id) {    
    this.router.navigate(['/consultorio/paciente/editar', id]);    
  }
  onCancel(){
    this.router.navigate(['/consultorio/paciente']);
  }
  onRefresh(){    
    let pacient = this.route.snapshot.data['paciente'];           
    this.paciente = pacient;    
  }  

  onDelete(paciente: Paciente) {
    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja deletar?');
    result$.asObservable().pipe(
      take(1),
      switchMap(result => result ? this.service.remove(paciente.id) : EMPTY)
    ).subscribe(
      success => {
        this.onRefresh();
      }
    );
  }
    
}

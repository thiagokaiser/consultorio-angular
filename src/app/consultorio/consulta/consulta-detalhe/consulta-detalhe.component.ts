import { Component, OnInit } from '@angular/core';
import { Consulta } from '../consulta';
import { Observable, EMPTY } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { ConsultaService } from '../consulta.service';
import { take, switchMap } from 'rxjs/operators';
import { NotificationService } from 'src/app/shared/messages/notification.service';

@Component({
  selector: 'app-consulta-detalhe',
  templateUrl: './consulta-detalhe.component.html'
})
export class ConsultaDetalheComponent implements OnInit {

  consulta: Consulta; 
  consultas$ : Observable<Consulta[]>

  constructor(    
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertModalService,
    private consultaService: ConsultaService,
    private ns: NotificationService) {                
      route.params.subscribe(val => {        
        this.onRefresh();
      });
    }

  ngOnInit() {    
  }

  onEdit(id) {        
    this.router.navigate(['editar'], { relativeTo: this.route });         
  }

  onCancel(id){
    this.router.navigate(['/consultorio/paciente/detalhe/', id]);    
  }

  onRefresh(){    
    let consult = this.route.snapshot.data['consulta'];           
    this.consulta = consult;    
  }  

  onNew(){
    this.router.navigate(['consulta/novo'], { relativeTo: this.route.parent });        
  }

  onDelete(consulta :Consulta){
    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja eliminar a consulta?');
    result$.asObservable().pipe(
      take(1),
      switchMap(result => result ? this.consultaService.remove(consulta.id) : EMPTY)
    ).subscribe(
      success => {
        this.ns.notify('Consulta eliminada com sucesso.')
        this.onCancel(consulta.id)
      }
    );  
  }
}

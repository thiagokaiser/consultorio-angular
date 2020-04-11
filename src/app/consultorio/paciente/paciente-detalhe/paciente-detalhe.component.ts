import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Consulta } from '../../consulta/consulta';

@Component({
  selector: 'app-paciente-detalhe',
  templateUrl: './paciente-detalhe.component.html'
})
export class PacienteDetalheComponent implements OnInit {

  paciente: Paciente; 
  consultas$ : Observable<Consulta[]>

  constructor(    
    private route: ActivatedRoute,
    private router: Router) {                
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
    
}

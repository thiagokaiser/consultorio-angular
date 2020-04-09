import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Consulta } from '../../consulta/consulta';
import { ConsultaService } from '../../consulta/consulta.service';

@Component({
  selector: 'app-paciente-detalhe',
  templateUrl: './paciente-detalhe.component.html'
})
export class PacienteDetalheComponent implements OnInit {

  paciente: Paciente; 
  consultas$ : Observable<Consulta[]>

  constructor(
    private consultaService : ConsultaService,
    private route: ActivatedRoute,
    private router: Router) {                
      route.params.subscribe(val => {
        console.log(val);
        this.onRefresh();
      });
    }

  ngOnInit() {
    //this.onRefresh();    
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
  onDetalhe(id){
    this.router.navigate(['consulta', id], { relativeTo: this.route });    
  }
}

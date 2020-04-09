import { Component, OnInit } from '@angular/core';
import { Consulta } from '../consulta';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

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
    private location: Location) {                
      route.params.subscribe(val => {
        console.log(val);
        this.onRefresh();
      });
    }

  ngOnInit() {
    //this.onRefresh();    
  }

  onEdit(id) {    
    this.router.navigate(['/consultorio/consulta/editar', id]);    
  }
  onCancel(id){
    this.router.navigate(['/consultorio/paciente/detalhe/', id]);
  }
  onRefresh(){    
    let consult = this.route.snapshot.data['consulta'];           
    this.consulta = consult;    
  }  
}

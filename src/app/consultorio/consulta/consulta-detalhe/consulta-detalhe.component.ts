import { Component, OnInit } from '@angular/core';
import { Consulta } from '../consulta';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consulta-detalhe',
  templateUrl: './consulta-detalhe.component.html'
})
export class ConsultaDetalheComponent implements OnInit {

  consulta: Consulta; 
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
    this.router.navigate(['editar'], { relativeTo: this.route });         
  }
  onCancel(id){
    this.router.navigate(['/consultorio/paciente/detalhe/', id]);    
  }
  onRefresh(){    
    let consult = this.route.snapshot.data['consulta'];           
    this.consulta = consult;    
  }  
}

import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { Observable, Subject, EMPTY } from 'rxjs';
import { PacienteService } from '../paciente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paciente-lista',
  templateUrl: './paciente-lista.component.html'
})
export class PacienteListaComponent implements OnInit {

  pacientes$: Observable<Paciente[]>;
  error$ = new Subject<boolean>();  

  constructor(
    private service: PacienteService,
    private router: Router,
    private route: ActivatedRoute    
  ) { }

  ngOnInit() {
    this.carregaPacientes();
  }

  carregaPacientes() {
    this.pacientes$ = this.service.list();
  }
  onDetalhe(id){
    this.router.navigate(['detalhe', id], { relativeTo: this.route });    
  }
  onRefresh(){    
    this.carregaPacientes();
  }
  
}

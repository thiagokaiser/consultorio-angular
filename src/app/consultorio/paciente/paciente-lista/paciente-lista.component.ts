import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { Observable, Subject, EMPTY } from 'rxjs';
import { PacienteService } from '../paciente.service';
import { catchError, take, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { PacienteDetalheComponent } from '../paciente-detalhe/paciente-detalhe.component';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

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
    private route: ActivatedRoute,
    private pacienteDetalhe: PacienteDetalheComponent
  ) { }

  ngOnInit() {
    this.carregaPacientes();
  }

  carregaPacientes() {
    this.pacientes$ = this.service.list();
  }
  onDetalhe(id){
    this.router.navigate(['detalhe', id], { relativeTo: this.route });
    this.pacienteDetalhe.onRefresh();
  }
  onRefresh(){
    this.carregaPacientes();
  }
  
}

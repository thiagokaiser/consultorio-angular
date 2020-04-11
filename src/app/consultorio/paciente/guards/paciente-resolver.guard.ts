import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteResolverGuard implements Resolve<Paciente> {

  constructor(
    private service: PacienteService
  ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Paciente> {
    if (route.params && route.params['id']){        
      return this.service.loadByID(route.params['id']);
    }

    return of({
      id: 0,
      nome: null,
      sobrenome: null,
      sexo: null,
      dtNascimento: null,
      prontuario: null,
      convenio: null
    });
  }  
}

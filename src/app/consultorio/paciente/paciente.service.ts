import { Injectable } from '@angular/core';
import { Paciente, ListPaciente } from './paciente';
import { CrudService } from 'src/app/shared/crud.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacienteService extends CrudService<Paciente>{

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}paciente`);
  }

  listPage(pager) {    
    return this.http.get<ListPaciente>(`${environment.API}paciente`, {params: pager});                   
  }  
}
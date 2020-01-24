import { Injectable } from '@angular/core';
import { Paciente } from './paciente';
import { CrudService } from 'src/app/shared/crud.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacienteService extends CrudService<Paciente>{

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}paciente`);
  }

  /* caso seja necessario sobescrever alguma logica do crudservice
  loadByID(id){
    return null;
  }
  */

}
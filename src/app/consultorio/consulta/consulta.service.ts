import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Consulta, ListConsulta } from './consulta';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService extends CrudService<Consulta>{  
  
  constructor(protected http: HttpClient) {
    super(http, `${environment.API}consulta`);
  }

  listPaciente(id){    
    return this.http.get<Consulta[]>(`${environment.API}consulta/paciente/${id}`);
  }
  listPage(pager) {    
    return this.http.get<ListConsulta>(`${environment.API}consulta/all`, {params: pager});
                    //.pipe(tap(console.log));
  }  

}
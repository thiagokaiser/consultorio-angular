import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Consulta, ListConsulta } from './consulta';
import { tap, delay, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConsultaService extends CrudService<Consulta>{  
  
  constructor(protected http: HttpClient) {
    super(http, `${environment.API}consulta`);
  }

  listPaciente(id){    
    return this.http.get<Consulta[]>(`${environment.API}consulta/paciente/${id}`)
      .pipe(
        delay(1000),
        tap(console.log)
      );
  }
  listPage(pager) {
    const headers = {
        headers: "'Content-Type': 'application/json'"
    };            
    return this.http.get<ListConsulta>(`${environment.API}consulta/all`, {headers: headers, params: pager})
      .pipe(
        delay(500),
        tap(console.log)
      );
  }

  /* caso seja necessario sobescrever alguma logica do crudservice
  loadByID(id){
    return null;
  }
  */

}
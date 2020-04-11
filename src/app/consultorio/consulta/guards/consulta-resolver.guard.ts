import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Consulta } from '../consulta';
import { ConsultaService } from '../consulta.service';


@Injectable({
  providedIn: 'root'
})
export class ConsultaResolverGuard implements Resolve<Consulta> {

  constructor(
    private service: ConsultaService
  ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Consulta> {
    if (route.params && route.params['id']){              
      return this.service.loadByID(route.params['id']);
    }    
    if (route.parent.params && route.parent.params['id']){          
      return of({
        id: 0,
        pacienteId:  route.parent.params['id'],
        conduta: null,
        dtConsulta: null,
        retorno: null,
        diagnostico: null,
        exames: null,
        cid: null       
      })
    }
    return of({
      id: 0,
      pacienteId: 0,
      conduta: null,
      dtConsulta: null,
      retorno: null,
      diagnostico: null,
      exames: null,
      cid: null       
    })
  }  
}

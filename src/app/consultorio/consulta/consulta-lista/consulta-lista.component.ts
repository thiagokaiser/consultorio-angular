import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Consulta, ListConsulta } from '../consulta';
import { ConsultaService } from '../consulta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import { PaginationInstance } from 'ngx-pagination';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-consulta-lista',
  templateUrl: './consulta-lista.component.html'
})
export class ConsultaListaComponent implements OnInit {

  @ViewChild(MatSort, {static: false}) sort: MatSort;

  consultas$ : Observable<ListConsulta>;  
  searchtext: string = "";  
  orderby: string = "dtconsulta desc";

  public config: PaginationInstance = {
      id: 'advanced',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 100
  };

  constructor(
    private consultaService : ConsultaService,
    private router : Router,
    private route : ActivatedRoute
    ){}

  ngOnInit() {    
    this.onRefresh();
  }   

  onDetalhe(id){    
    this.router.navigate(['consulta', id], { relativeTo: this.route });        
  }

  onNovaConsulta(){        
    this.router.navigate(['consulta/novo'], { relativeTo: this.route });        
  }    

  onPageChange(pagina : number){    
    this.config.currentPage = pagina;    
    this.onRefresh();    
  }

  onPageSize(pagesize: number){    
    this.config.itemsPerPage = pagesize;    
    this.onPageChange(1);
  }

  onSearch(search: string){    
    this.searchtext = search;    
    this.onPageChange(1);
  }

  sortData(sort: Sort){
    this.orderby = `${sort.active} ${sort.direction}`    
    this.onRefresh();
  }   

  onRefresh(){
    let id = this.route.snapshot.paramMap.get('id');        
    let params = {page: this.config.currentPage, pagesize: this.config.itemsPerPage, orderby: this.orderby, searchtext: "%" + this.searchtext + "%"};
        
    this.consultas$ = this.consultaService.listPaciente({id: id, params: params}).pipe(
      tap(x => this.config.totalItems = x['count'])
    )
  }  
}

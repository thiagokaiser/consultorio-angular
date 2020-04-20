import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { Observable, pipe, observable, BehaviorSubject } from 'rxjs';
import { Consulta, ListConsulta } from '../consulta';
import { PaginationInstance } from 'ngx-pagination';
import { tap } from 'rxjs/operators';
import { Sort, MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-consulta-lista-all',
  templateUrl: './consulta-lista-all.component.html'
})
export class ConsultaListaAllComponent implements OnInit {  

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
    private consultaService: ConsultaService
  ) { }  

  ngOnInit() {
    this.onRefresh();
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
    let params = {page: this.config.currentPage, pagesize: this.config.itemsPerPage, orderby: this.orderby, searchtext: "%" + this.searchtext + "%"};
        
    this.consultas$ = this.consultaService.listPage(params).pipe(
      tap(x => this.config.totalItems = x['count'])
    )
  }  
}

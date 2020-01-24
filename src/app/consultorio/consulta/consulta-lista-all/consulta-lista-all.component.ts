import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { Observable, pipe, observable, BehaviorSubject } from 'rxjs';
import { Consulta } from '../consulta';
import { PaginationInstance } from 'ngx-pagination';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-consulta-lista-all',
  templateUrl: './consulta-lista-all.component.html',
  styleUrls: ['./consulta-lista-all.component.css']
})
export class ConsultaListaAllComponent implements OnInit {  

  consultas$ : Observable<Consulta>
  pagesize: number = 5;
  page: number = 1;
  searchtext: string = "";
  totalcount: number;
  varcount;
  orderby: string = "dtconsulta";

  public config: PaginationInstance = {
      id: 'advanced',
      itemsPerPage: this.pagesize,
      currentPage: this.page,
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
    this.page = pagina;
    this.onRefresh();    
  }
  onPageSize(pagesize: number){    
    this.config.itemsPerPage = pagesize;
    this.pagesize = pagesize;    
    this.page = 1;
    this.onPageChange(this.page);
  }
  onSearch(search: string){    
    this.searchtext = search;
    this.page = 1;
    this.onPageChange(this.page);
  }
  onRefresh(){
    let params = {page: this.page, pagesize: this.pagesize, orderby: this.orderby, searchtext: "%" + this.searchtext + "%"};
    
    this.consultas$ = this.consultaService.listPage(params).pipe(
      tap(x => this.attTotalItems(x))
    )       
  }
  attTotalItems(consultas){        
    this.config.totalItems = consultas['count'];
  }
  onOrderBy(orderby: string){
    this.orderby = orderby;
    this.onRefresh();
  }
}

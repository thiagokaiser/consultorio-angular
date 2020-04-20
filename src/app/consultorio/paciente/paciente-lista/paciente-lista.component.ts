import { Component, OnInit, ViewChild } from '@angular/core';
import { Paciente, ListPaciente } from '../paciente';
import { Observable, Subject, EMPTY } from 'rxjs';
import { PacienteService } from '../paciente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import { PaginationInstance } from 'ngx-pagination';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-paciente-lista',
  templateUrl: './paciente-lista.component.html'
})
export class PacienteListaComponent implements OnInit { 
  
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  pacientes$: Observable<ListPaciente>;  
  searchtext: string = "";  
  orderby: string = "id desc";

  public config: PaginationInstance = {
      id: 'advanced',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 100
  };

  constructor(
    private service: PacienteService,
    private router: Router,
    private route: ActivatedRoute    
  ) { }
    
  ngOnInit() {
    this.onRefresh();
  }
  
  onDetalhe(id){
    this.router.navigate(['detalhe', id], { relativeTo: this.route });    
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
        
    this.pacientes$ = this.service.listPage(params).pipe(
      tap(x => this.config.totalItems = x['count'])
    )    
  }  


  
}

import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { LoginService } from '../../login/login.service';
import { PerfilService } from '../perfil.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil-detalhe',
  templateUrl: './perfil-detalhe.component.html',
  styleUrls: ['./perfil-detalhe.component.css']
})
export class PerfilDetalheComponent implements OnInit {
  
  imagePath = '/assets/img-user.jpg';
  user$: Observable<User>

  constructor(
    private loginService: LoginService,
    private perfilService: PerfilService
    ) { }

  ngOnInit() {  
    this.carregaPerfil();  
  }  

  carregaPerfil(){        
    this.user$ = this.perfilService.loadPerfil(this.loginService.user.email)    
  }
}

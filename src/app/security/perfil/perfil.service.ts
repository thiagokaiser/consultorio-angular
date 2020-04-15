import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../user';
import { take } from 'rxjs/operators';
import { LoginService } from '../login/login.service';

@Injectable()
export class PerfilService{

    host = `${environment.API}security/perfil`

    constructor(
        private http: HttpClient
        ){}

    loadPerfil(email: string){        
        return this.http.post<User>(this.host, {'email': email}).pipe(take(1));
    }
}
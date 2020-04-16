import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../user';
import { take } from 'rxjs/operators';
import { LoginService } from '../login/login.service';

@Injectable({
    providedIn: 'root'
})
export class PerfilService{

    host = `${environment.API}security/perfil`

    constructor(
        private http: HttpClient
        ){}

    loadPerfil(email: string){        
        return this.http.post<User>(this.host, {'email': email}).pipe(take(1));
    }

    updatePerfil(user: User){
        console.log(user);        
        return this.http.put(this.host, user).pipe(take(1));
    }

}
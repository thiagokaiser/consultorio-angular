import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../user';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class LoginService{

    user: User;

    constructor(private http:HttpClient,
                private router: Router){}

    login(email: string, password: string): Observable<User>{

        return this.http.post<User>(`${environment.API}security/login`,
                                    {email: email, password: password}).pipe(
                                        tap(user => this.user = user)
                                    )                        
    }

    isLoggedIn(): boolean {
        return this.user !== undefined;
    }

    handleLogin(path?: string){
        this.router.navigate(['/security/login', path]);
    }
}
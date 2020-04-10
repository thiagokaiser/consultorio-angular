import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../user';
import { tap, filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';


@Injectable()
export class LoginService{

    user: User;
    lastUrl: string;

    constructor(private http:HttpClient,
                private router: Router){
                    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
                                      .subscribe((e: NavigationEnd) => this.lastUrl = e.url);
                }

    login(email: string, password: string): Observable<User>{

        return this.http.post<User>(`${environment.API}security/login`,
                                    {email: email, password: password}).pipe(
                                        tap(user => this.user = {
                                            firstName: 'teste',
                                            lastName: 'asdasd',
                                            email: user.email,
                                            password: "",
                                            accessToken: user.accessToken
                                        })
                                    )                        
    }

    isLoggedIn(): boolean {
        return this.user !== undefined;
    }

    handleLogin(path: string = this.lastUrl){
        console.log(path);
        this.router.navigate(['/security/login', btoa(path)]);
    }

    logout(){
        this.user = undefined;
        this.router.navigate(['/security/login']);
    }
}
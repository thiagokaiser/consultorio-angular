import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from './messages/notification.service';
import { LoginService } from '../security/login/login.service';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler{

    constructor(private ns: NotificationService,
                private injector: Injector,
                private zone: NgZone){
        super()
    }

    handleError(errorResponse: HttpErrorResponse | any){
        console.log(errorResponse instanceof HttpErrorResponse)
        if(errorResponse instanceof HttpErrorResponse){
            console.log(123123);
            
            const message = errorResponse.error.message            
            this.zone.run(() => {
                switch(errorResponse.status){
                    case 401:
                        console.log(111111111111111111111);                        
                        this.injector.get(LoginService).handleLogin()
                        this.ns.notify(message || 'Não Autorizado.')
                        break;
                    case 403:
                        this.ns.notify(message || 'Não Autorizado.')
                        break;
                    case 404:
                        console.log('case404')
                        this.ns.notify(message || 'Recurso não encontrado.')
                        break;                   

                }
            })
        }
        console.log('errorhandler')
        super.handleError(errorResponse);
    }    
}
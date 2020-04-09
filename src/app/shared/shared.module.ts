import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudService } from './crud.service';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { LoginService } from '../security/login/login.service';
import { loggedInGuard } from '../security/loggedIn.guard';



@NgModule({
  declarations: [    
  ConfirmModalComponent
],
  imports: [
    CommonModule
  ],
  exports:[
    ConfirmModalComponent    
  ],
  entryComponents:[
    ConfirmModalComponent
  ],
  providers: []
})
export class SharedModule { }

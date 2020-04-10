import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { InputContainerComponent } from './input-container/input-container.component';

@NgModule({
  declarations: [    
  ConfirmModalComponent, InputContainerComponent
],
  imports: [
    CommonModule    
  ],
  exports:[
    ConfirmModalComponent, InputContainerComponent
  ],
  entryComponents:[
    ConfirmModalComponent
  ],
  providers: []
})
export class SharedModule { }

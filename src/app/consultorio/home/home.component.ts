import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/messages/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private ns: NotificationService) { }

  ngOnInit() {
  }

  onNotify(){
    this.ns.notify('aaaaaaaaaaaaaaaaaaaaaaa')
    
  }

}

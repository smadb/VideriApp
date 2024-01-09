import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-submit-connect',
  templateUrl: './submit-connect.component.html',
  styleUrls: ['./submit-connect.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class SubmitConnectComponent  implements OnInit {

  constructor() { }
  @Input() text : string | undefined;  
  ngOnInit() {}

}

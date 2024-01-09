import { Component, Input, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { enter,save } from 'ionicons/icons';

@Component({
  selector: 'app-switch-login',
  templateUrl: './switch-login.component.html',
  styleUrls: ['./switch-login.component.scss'],
  standalone: true,
  imports: [IonIcon,IonButton]
})
export class SwitchLoginComponent  implements OnInit {

  constructor() {
    addIcons({enter,save})
  }

  @Input() text : string | undefined;
  @Input() icone : any | undefined;

  ngOnInit() {}

}

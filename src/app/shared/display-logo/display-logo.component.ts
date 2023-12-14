import { Component, Input, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-display-logo',
  templateUrl: './display-logo.component.html',
  styleUrls: ['./display-logo.component.scss'],
  standalone:true,
  imports:[IonContent]

})
export class DisplayLogoComponent {

  constructor() { }

  //INPUTS

  @Input() source !: string; //TODO : liste en param possible de la source
  @Input() doTransition:boolean = false; // trigger le passage du logo de pleine page à haut de page(signIn/signUp) transition de déplacement

  

}

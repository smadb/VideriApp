import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { User } from './models/userApp.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {
    let user = new User(1,'mail','alias','password','picture',[])
    console.log(user) 
  }
}

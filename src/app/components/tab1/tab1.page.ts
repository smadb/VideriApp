import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IonHeaderService } from 'src/app/services/ionheader/ion-header.service';
import { ExploreContainerComponent } from 'src/app/shared/explore-container/explore-container.component';
import { IonHeaderComponent } from 'src/app/shared/ion-header/ion-header.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonHeaderComponent],
})
export class Tab1Page implements OnInit{

  @Output() headerTitle = new EventEmitter<string>;

  constructor(private ionheaderservice:IonHeaderService) {}

  ngOnInit(): void {
    this.ionheaderservice.setTitle('tab 1')
  }
}

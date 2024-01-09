import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IonHeaderService } from 'src/app/services/ionheader/ion-header.service';
import { ExploreContainerComponent } from 'src/app/shared/explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page implements OnInit{

  constructor(private ionheaderservice:IonHeaderService) {}

  ngOnInit(): void {
    this.ionheaderservice.setTitle('tab2')
  }
}
